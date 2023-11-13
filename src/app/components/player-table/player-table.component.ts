import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { playersData } from 'src/app/data/data';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css'],
})
export class PlayerTableComponent implements OnInit {
  player: any = {};
  players: any = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.players = playersData;
  }
  displayPlayer(id: number) {
    this.router.navigate([`playerInfo/${id}`]);
  }
}
