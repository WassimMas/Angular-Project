import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css'],
})
export class MatchesTableComponent implements OnInit {
  match: any = {};
  matches: any = [];
  constructor(private router: Router, private matchService: MatchService) {}

  ngOnInit(): void {
    this.matches = matchesData;
    this.matchService.getAllMatches().subscribe();
  }
  goToDisplay(id: number) {
    this.router.navigate([`matchInfo/${id}`]);
  }
  goToEdit(id: number) {
    this.router.navigate([`editMatch/${id}`]);
  }
  delete(id: number) {
    console.log(`here object number ${id} deleted`);
    this.matchService.deleteMatch(id).subscribe();
  }
}
