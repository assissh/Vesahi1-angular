import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [GlobalService]
})
export class LoginComponent implements OnInit {

  login_Form: FormGroup;

  constructor(private globalservice: GlobalService, private fb: FormBuilder) {
    this.login_Form = this.fb.group({
      Username: ['', Validators.required],
      Password: ['', Validators.required],

    });
  }

  ngOnInit() {
  }

  add(post: any) {
    this.globalservice.postlogin(this.login_Form.value).subscribe(data => console.log('You have been sucessfully login'));
    // alert(JSON.stringify(post))


  }
}
