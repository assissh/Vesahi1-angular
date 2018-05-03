import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../../global.service';
import {Team} from '../../Team';

@Component({
  selector: 'app-production-team-list',
  templateUrl: './production-team-list.component.html',
  styleUrls: ['./production-team-list.component.css']
})
export class ProductionTeamListComponent implements OnInit {

  public production_team_members = [];
  public errorMsg;
  selected_member: Team;

  constructor(private Teamservice: GlobalService) {
  }

  ngOnInit() {
    this.Teamservice.get_production_team().subscribe(data => this.production_team_members = data, error => this.errorMsg = error);
  }

  memberclicked(team_member: Team) {
    this.selected_member = team_member;
    console.log('memberclicked', team_member);
  }
}
