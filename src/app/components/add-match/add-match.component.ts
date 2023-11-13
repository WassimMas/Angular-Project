import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css'],
})
export class AddMatchComponent implements OnInit {
  // object
  match: any = {};
  // id form
  AddMatchForm!: FormGroup;

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {}

  addMatch() {
    console.log(this.match);
    this.matchService.addMatch(this.match).subscribe();
  }
}
