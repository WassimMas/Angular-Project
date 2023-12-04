import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
})
export class EditPlayerComponent implements OnInit {
  EditPlayerForm!: FormGroup;
  player: any = {};
  players: any = [];
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pS: PlayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pS.getPlayerById(this.id).subscribe((result: any) => {
      this.player = result.player;
    });
  }
  editPlayer() {
    console.log('here the new match', this.player);
    this.pS.editPlayer(this.player).subscribe((res: any) => {
      console.log('here object from component :', res.isUpdated);
      if (res.isUpdated) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
