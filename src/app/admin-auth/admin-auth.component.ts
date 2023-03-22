import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {

  constructor() { }

  signUp(admin: any) {
    console.log("Name: " + admin.username + "Email: " + admin.email + "Password: " + admin.password);
  }
}