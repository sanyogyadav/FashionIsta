import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../services/api/api-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private _snackbar: MatSnackBar, private fb: FormBuilder, private api: ApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let email = this.loginForm.value.email
      let password = this.loginForm.value.pass

      this.api.login(email, password).subscribe((result: any) => {
        this._snackbar.open(result["message"],"ok")
          localStorage.setItem('token', result.token);
          localStorage.setItem('userid', result.user._id);
          this.router.navigateByUrl('products-list');
          })
    }
    else {
      console.log("Invalid data", this.loginForm.value);
      this._snackbar.open("Invalid Data","ok")
    }
  }
}
