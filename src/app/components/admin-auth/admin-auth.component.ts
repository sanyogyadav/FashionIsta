import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api/api-service.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  adminForm !: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private api: ApiServiceService, private router: Router) { }

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
    }
      else {
        this.message = 'Email or password wrong!!'
      }
    }
    else {
      console.log("Invalid data", this.adminForm.value);
    }
  }
}