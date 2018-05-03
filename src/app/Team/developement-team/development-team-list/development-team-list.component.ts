import { Component, OnInit } from '@angular/core';
import {Team} from '../../Team';
import {GlobalService} from '../../../global.service';

@Component({
  selector: 'app-development-team-list',
  templateUrl: './development-team-list.component.html',
  styleUrls: ['./development-team-list.component.css']
})
export class DevelopmentTeamListComponent implements OnInit {
  public development_team_members = [];
  public errorMsg;
  selected_member: Team;

  constructor(private Teamservice: GlobalService) {
  }

  ngOnInit() {
    this.Teamservice.getTeam().subscribe(data => this.development_team_members = data, error => this.errorMsg = error);
  }

  memberclicked(team_member: Team) {
    this.selected_member = team_member;
    console.log('memberclicked', team_member);
  }
}











// export class TeamComponent implements OnInit {
//   public team_members = [];
//   public errorMsg;
//   selected_member: MyTeam;
//   constructor(private _Teamservice: TeamService) {}
//
//   ngOnInit() {
//      this._Teamservice.getTeam()
//        .subscribe(data => this.team_members = data,
//                  error => this.errorMsg = error);
//
//
// }
// memberclicked(team_member: MyTeam ) {
//     this.selected_member = team_member;
//     console.log('memberclicked', team_member);
// }
// }
