import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private tS: TeamService, private router: Router) {}

  // id

  ngOnInit(): void {}
  addTeam() {
    console.log(this.team);
    this.tS.addTeam(this.team).subscribe((result: any) => {
      console.log(result.msg);
      this.router.navigate(['/dashboard']);
    });
  }
}
