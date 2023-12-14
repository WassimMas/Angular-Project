import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamData } from 'src/app/data/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css'],
})
export class TeamsTableComponent implements OnInit {
  team: any = {};
  teams: any = [];
  constructor(private router: Router, private tS: TeamService) {}

  ngOnInit(): void {
    this.getAllTeams();
  }
  displayTeam(id: any) {
    this.router.navigate([`teamInfo/${id}`]);
  }
  editTeam(id: any) {
    this.router.navigate([`editTeam/${id}`]);
  }
  deleteTeam(id: any) {
    console.log(`here object number ${id} deleted`);
    this.tS.deleteTeam(id).subscribe((res) => {
      console.log('here response from BE', res.msg);
      if (res.msg) {
        this.getAllTeams();
      }
    });
  }

  getAllTeams() {
    this.tS.getAllTeams().subscribe((response) => {
      console.log('here response from BE', response);
      this.teams = response.teams;
    });
  }
}
