import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  addTeamForm = FormGroup;
  // object
  team: any = {};

  stadiums: any = [];
  stadiumId: any;
  constructor(
    private tS: TeamService,
    private router: Router,
    private stadiumService: StadiumService
  ) {}

  // id

  ngOnInit(): void {
    this.stadiumService.getAllStadia().subscribe((data) => {
      this.stadiums = data.stadiumsTab;
    });
  }
  addTeam() {
    console.log('here add team', this.team);
    this.team.sId = this.stadiumId;
    this.tS.addTeam(this.team).subscribe((result: any) => {
      console.log(result.msg);
      this.router.navigate(['/dashboard']);
    });
  }
  selectStadium(evt: any) {
    console.log('here stadium id', evt.target.value);
    this.stadiumId = evt.target.value;
  }
}
