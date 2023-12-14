import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
})
export class EditTeamComponent implements OnInit {
  EditTeamForm!: FormGroup;
  team: any = {};
  teams: any = [];
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private tS: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.tS.getTeamById(this.id).subscribe((result: any) => {
      console.log('here result from be to comp', result);

      this.team = result.team;
    });
  }

  editTeam() {
    console.log('here the new match', this.team);
    this.tS.editTeam(this.team).subscribe((res: any) => {
      console.log('here object from component :', res.isUpdated);
      if (res.isUpdated) {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
