import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api/api-service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  registerForm !: FormGroup

  constructor(private fb: FormBuilder, private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    console.log("hi");
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    console.log("Submitted");
    if (this.registerForm.valid) {
      console.log("Register Success", this.registerForm.value);

      let username = this.registerForm.value.username
      let email = this.registerForm.value.email
      let password = this.registerForm.value.pass

      this.api.addNewUser(username, email, password).subscribe((result: any) => {
        this.router.navigateByUrl('');
        console.log("After checking");
      })
    }
    else {
      console.log("Invalid data", this.registerForm.value);
    }
  }
}