import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent implements OnInit {
  constructor() {}
  // object
  team: any = {};
  // id
  addTeamForm = FormGroup;
  ngOnInit(): void {}
  addTeam() {
    console.log(this.team);
  }
}
