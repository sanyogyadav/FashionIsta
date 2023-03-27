import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userRegistrationFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initUserRegistrationForm();
  }

  initUserRegistrationForm(): void {
    this.userRegistrationFormGroup = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  userRegister() {
  
  }
}
