import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log("Valid data", this.loginForm.value);
      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.pass,
        service: this.loginForm.value.service
      }
      this.user.login(data).subscribe((result:any)=>{console.log(result);
      localStorage.setItem('token', result.id);
      this.router.navigateByUrl('/dashboard/notes');
      })
    }
    else{
      console.log("Invalid data", this.loginForm.value);
    }
  }
}
