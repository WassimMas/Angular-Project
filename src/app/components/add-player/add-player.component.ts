import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  constructor() {}

  ngOnInit(): void {}
  addPlayer() {
    console.log(this.player);
  }
}
