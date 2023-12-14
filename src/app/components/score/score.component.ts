import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  @Input() matchInput: any;
  @Output() newMatches: EventEmitter<any> = new EventEmitter();
  constructor(private matchService: MatchService) {}

  ngOnInit(): void {}

  scoreColor(a: number, b: number) {
    if (a > b) {
      return 'green';
    } else if (a < b) {
      return 'red';
    } else {
      return 'blue';
    }
  }

  scoreResult(a: number, b: number) {
    if (a > b) {
      return '(win)';
    } else if (a < b) {
      return '(loss)';
    } else {
      return '(draw)';
    }
  }
  deleteMatche(id: any) {
    this.matchService.deleteMatch(id).subscribe((result) => {
      console.log('Here result from BE', result.msg);
      this.matchService.getAllMatches().subscribe((data) => {
        console.log('Here data from BE', data.matches);
        this.newMatches.emit(data.matches);
      });
    });
  }
}
