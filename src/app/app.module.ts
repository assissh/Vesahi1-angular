import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {LoginService} from './login.service';
import {GlobalService} from './global.service';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule, routingcomponenets} from './app-routing.module';
import { DevelopementTeamComponent} from './Team/developement-team/development_team_create/developement-team.component';

import { DevelopmentTeamListComponent } from './Team/developement-team/development-team-list/development-team-list.component';
import { ProductionTeamCreateComponent } from './Team/Production-team/production-team-create/production-team-create.component';
import { ProductionTeamListComponent } from './Team/Production-team/production-team-list/production-team-list.component';
import { MarketingTeamCreateComponent } from './Team/marketing-team/marketing-team-create/marketing-team-create.component';
import { MarketingTeamListComponent } from './Team/marketing-team/marketing-team-list/marketing-team-list.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DevelopementTeamComponent,
    routingcomponenets,

    DevelopmentTeamListComponent,

    ProductionTeamCreateComponent,

    ProductionTeamListComponent,

    MarketingTeamCreateComponent,

    MarketingTeamListComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
