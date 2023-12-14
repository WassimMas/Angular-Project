import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  // object
  player: any = {};
  // id form
  AddPlayerForm!: FormGroup;
  // teamsTable
  teams: any = [];
  teamId: any;
  constructor(
    private pS: PlayerService,
    private router: Router,
    private tS: TeamService
  ) {}

  ngOnInit(): void {
    this.tS.getAllTeams().subscribe((docs) => {
      console.log('here response from BE', docs.teams);
      this.teams = docs.teams;
      this.teamId = this.teams[0]._id;
    });
  }

  addPlayer() {
    console.log(this.player);
    this.player.teamId = this.teamId;
    this.pS.addPlayer(this.player).subscribe((result: any) => {
      console.log(result.msg);
      this.router.navigate(['/dashboard']);
    });
  }
  selectTeam(evt: any) {
    console.log('here log evt', evt.target.value);
    this.teamId = evt.target.value;
  }
}
