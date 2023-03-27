import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLoginFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initUserLoginForm();
  }

  initUserLoginForm(): void {
    this.userLoginFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  userLogin() {
  
  }
}
