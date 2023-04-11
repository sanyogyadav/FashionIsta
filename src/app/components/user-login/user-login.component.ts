import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api/api-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    console.log("submitted")
    if (this.loginForm.valid) {
      console.log("Valid data", this.loginForm.value);
      let email = this.loginForm.value.email
      let password = this.loginForm.value.pass

      this.api.login(email, password).subscribe((result: any) => {
          localStorage.setItem('token', result.user._id);
          this.router.navigateByUrl('products-list');
          })
    }
    else {
      console.log("Invalid data", this.loginForm.value);
    }
  }
}
