import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { playersData } from 'src/app/data/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css'],
})
export class PlayerInfoComponent implements OnInit {
  player: any = {};
  id: any;
  players: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pS: PlayerService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.player = playersData;
    this.pS.getPlayerById(this.id).subscribe((res: any) => {
      console.log('here response from BE', res.player);
      this.player = res.player;
    });
  }
}
