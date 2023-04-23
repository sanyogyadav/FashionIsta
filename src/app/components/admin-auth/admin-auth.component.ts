import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  adminForm !: FormGroup;
  message: string = '';

  constructor(private _snackbar: MatSnackBar, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  adminSubmit() {
    if (this.adminForm.valid) {
      let email = this.adminForm.value.email
      let password = this.adminForm.value.pass

      if (email == 'admin@gmail.com' && password == 'admin@123') {
        localStorage.setItem('AdminToken', email);
        this.router.navigateByUrl('admin-layout');
        this._snackbar.open("Login Successfully","ok")

      }
      else {
      this._snackbar.open("Invalid Data","ok")
      }
    }
    else {
      this._snackbar.open("Invalid Data","ok")
    }
  }
}