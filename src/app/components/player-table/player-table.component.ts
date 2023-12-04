import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css'],
})
export class PlayerTableComponent implements OnInit {
  player: any = {};
  players: any = [];
  constructor(private router: Router, private pS: PlayerService) {}

  ngOnInit(): void {
    this.getAllPlayers();
  }
  displayPlayer(id: number) {
    this.router.navigate([`playerInfo/${id}`]);
  }
  editPlayer(id: number) {
    this.router.navigate([`edit-player/${id}`]);
  }
  deletePlayer(id: number) {
    console.log(`here object number ${id} deleted`);
    this.pS.deletePlayer(id).subscribe((res) => {
      console.log('here response from component', res.msg);
      this.getAllPlayers();
    });
  }

  getAllPlayers() {
    this.pS.getAllPlayers().subscribe((response) => {
      console.log('here response from BE', response);
      this.players = response.players;
    });
  }
}
