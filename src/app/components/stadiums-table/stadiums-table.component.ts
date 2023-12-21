import { Component, OnInit } from '@angular/core';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css'],
})
export class StadiumsTableComponent implements OnInit {
  stadia: any = [];
  constructor(private stadiumService: StadiumService) {}

  ngOnInit(): void {
    this.stadiumService.getAllStadia().subscribe((response) => {
      console.log('here response from BE', response.stadiumsTab);
      this.stadia = response.stadiumsTab;
    });
  }
}
