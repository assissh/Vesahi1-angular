import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {DevelopementTeamComponent} from './Team/developement-team/development_team_create/developement-team.component';
import {LoginComponent} from './login/login.component';
import {DevelopmentTeamListComponent} from './Team/developement-team/development-team-list/development-team-list.component';
import {ProductionTeamCreateComponent} from './Team/Production-team/production-team-create/production-team-create.component';
import {ProductionTeamListComponent} from './Team/Production-team/production-team-list/production-team-list.component';
import {MarketingTeamCreateComponent} from './Team/marketing-team/marketing-team-create/marketing-team-create.component';
import {MarketingTeamListComponent} from './Team/marketing-team/marketing-team-list/marketing-team-list.component';

const routes: Routes = [
  {path: 'Development_Team', component: DevelopementTeamComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Development_Team_list', component: DevelopmentTeamListComponent},
  {path: 'Production_Team', component: ProductionTeamCreateComponent},
  {path: 'Production_Team_list', component: ProductionTeamListComponent},
  {path: 'Marketing_Team', component: MarketingTeamCreateComponent},
  {path: 'Marketing_Team_list', component: MarketingTeamListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponenets = [DevelopementTeamComponent, LoginComponent, DevelopmentTeamListComponent, ProductionTeamCreateComponent,
ProductionTeamListComponent, MarketingTeamCreateComponent, MarketingTeamListComponent];
