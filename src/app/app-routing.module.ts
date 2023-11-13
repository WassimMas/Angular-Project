import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayersComponent } from './components/players/players.component';

const routes: Routes = [
  // http://localhost:4200 : url de base
  { path: '', component: HomeComponent },
  // http://localhost:4200/login : display login

  { path: 'login', component: LoginComponent },
  // http://localhost:4200/subscription : display signup
  { path: 'subscription', component: SignupComponent },
  // http://localhost:4200/matches : display matches
  { path: 'matches', component: MatchesComponent },
  // http://localhost:4200/dashboard : display dashboard
  { path: 'dashboard', component: DashboardComponent },

  // http://localhost:4200/add-match : display add match
  { path: 'add-match', component: AddMatchComponent },

  // http://localhost:4200/add-player : display add player
  { path: 'add-player', component: AddPlayerComponent },

  // http://localhost:4200/add-team : display add team
  { path: 'add-team', component: AddTeamComponent },
  // http://localhost:4200/add-team : display match info
  { path: 'matchInfo/:id', component: MatchInfoComponent },

  // http://localhost:4200/add-team : display Player info
  { path: 'playerInfo/:id', component: PlayerInfoComponent },

  // http://localhost:4200/add-team : display Team info
  { path: 'teamInfo/:id', component: TeamInfoComponent },

  // http://localhost:4200/add-team : display edit-match
  { path: 'editMatch/:id', component: EditMatchComponent },

  // http://localhost:4200/add-team : display edit-match
  { path: 'players', component: PlayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
