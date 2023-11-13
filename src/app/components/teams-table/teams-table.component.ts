import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teamData } from 'src/app/data/data';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css'],
})
export class TeamsTableComponent implements OnInit {
  team: any = {};
  teams: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.teams = teamData;
  }
  displayTeam(id: number) {
    this.router.navigate([`playerInfo/${id}`]);
  }
}
