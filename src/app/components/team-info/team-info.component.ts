import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teamData } from 'src/app/data/data';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css'],
})
export class TeamInfoComponent implements OnInit {
  team: any = {};
  id: any;
  teams: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private tS: TeamService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.team = teamData;
    this.tS.getTeamById(this.id).subscribe((res: any) => {
      console.log('here response from BE', res.team);
      this.team = res.team;
    });
  }
}
