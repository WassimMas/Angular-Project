import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-staduim',
  templateUrl: './add-staduim.component.html',
  styleUrls: ['./add-staduim.component.css'],
})
export class AddStaduimComponent implements OnInit {
  stadiumForm!: FormGroup;
  stadium: any = {};
  constructor(private stadiumService: StadiumService) {}

  ngOnInit(): void {}
  addStadium() {
    console.log('here stadium object', this.stadium);
    this.stadiumService.addStadium(this.stadium).subscribe((result) => {
      console.log('Here response from BE', result.msg);
    });
  }
}
