import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

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
  constructor(private pS: PlayerService, private router: Router) {}

  ngOnInit(): void {}

  addPlayer() {
    console.log(this.player);
    this.pS.addPlayer(this.player).subscribe((result: any) => {
      console.log(result.msg);
      this.router.navigate(['/dashboard']);
    });
  }
}
