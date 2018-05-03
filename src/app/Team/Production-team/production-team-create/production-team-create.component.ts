import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../../global.service';

@Component({
  selector: 'app-production-team-create',
  templateUrl: './production-team-create.component.html',
  styleUrls: ['./production-team-create.component.css']
})
export class ProductionTeamCreateComponent implements OnInit {
  production_teamForm: FormGroup;

  constructor(private globalservice: GlobalService, private fb: FormBuilder) {
    this.production_teamForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  add(post: any) {
    this.globalservice.post_production_team(this.production_teamForm.value)
.subscribe(data => console.log('form submitted successfully'));
    // alert(JSON.stringify(post))


  }
}











// export class DevelopementTeamComponent implements OnInit {
//   development_teamForm: FormGroup;
//
//   constructor(private Loginservice: LoginService, private fb: FormBuilder) {
//     this.development_teamForm = this.fb.group({
//       Name: ['', Validators.required],
//       Description: ['', Validators.required],
//
//     });
//   }
//
//   ngOnInit() {
//   }
//
//   add(post: any) {
//     this.Loginservice.post_development_team(this.development_teamForm.value)
// .subscribe(data => console.log('form submitted successfully'));
//     // alert(JSON.stringify(post))
//
//
//   }
// }
