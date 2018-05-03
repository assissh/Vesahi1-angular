import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../../global.service';

@Component({
  selector: 'app-marketing-team-create',
  templateUrl: './marketing-team-create.component.html',
  styleUrls: ['./marketing-team-create.component.css']
})
export class MarketingTeamCreateComponent implements OnInit {
  marketing_teamForm: FormGroup;

  constructor(private globalservice: GlobalService, private fb: FormBuilder) {
    this.marketing_teamForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  add(post: any) {
    this.globalservice.post_marketing_team(this.marketing_teamForm.value).subscribe(data => console.log('form submitted successfully'));


  }
}
