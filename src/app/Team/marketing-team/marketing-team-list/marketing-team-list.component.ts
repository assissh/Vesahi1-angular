import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../global.service';
import {Team} from '../../Team';

@Component({
  selector: 'app-marketing-team-list',
  templateUrl: './marketing-team-list.component.html',
  styleUrls: ['./marketing-team-list.component.css']
})
export class MarketingTeamListComponent implements OnInit {

 public marketing_team_members = [];
  public errorMsg;
  selected_member: Team;

  constructor(private Teamservice: GlobalService) {
  }

  ngOnInit() {
    this.Teamservice.get_marketing_team().subscribe(data => this.marketing_team_members = data, error => this.errorMsg = error);
  }

  memberclicked(team_member: Team) {
    this.selected_member = team_member;
    console.log('memberclicked', team_member);
  }
}


