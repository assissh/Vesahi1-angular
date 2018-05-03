import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder, Validators} from '@angular/forms';
import {GlobalService} from '../../../global.service';


@Component({
  selector: 'app-developement-team',
  templateUrl: './developement-team.component.html',
  styleUrls: ['./developement-team.component.css'],
})
export class DevelopementTeamComponent implements OnInit {
  development_teamForm: FormGroup;

  constructor(private globalservice: GlobalService, private fb: FormBuilder) {
    this.development_teamForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  add(post: any) {
    this.globalservice.post_development_team(this.development_teamForm.value).subscribe(data => console.log('form submitted successfully'));
    // alert(JSON.stringify(post))


  }
}




