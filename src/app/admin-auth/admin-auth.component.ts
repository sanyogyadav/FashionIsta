import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {

  signUp(data:object):void{
    console.log(data)
  }
}