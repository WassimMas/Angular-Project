import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: any = [];
  constructor() {}

  ngOnInit(): void {
    this.players = [
      { id: '1', name: 'CR7', position: 'ATK', age: '37' },
      { id: '2', name: 'Messi', position: 'ATK', age: '36' },
      { id: '1', name: 'Salah', position: 'ATK', age: '28' },
    ];
  }
}
