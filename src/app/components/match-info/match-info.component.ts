import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css'],
})
export class MatchInfoComponent implements OnInit {
  match: any = {};
  id: any;
  matches: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matches = matchesData;
    this.matchService.getMatchById(this.id).subscribe((res) => {
      console.log('here response from BE');
      this.match = res.match;
    });
  }
}
