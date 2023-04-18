import { Component, OnInit } from '@angular/core';
import { LoggedinServiceService } from 'src/app/services/loggedin/loggedin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private logedin: LoggedinServiceService, private router: Router) {}

  ngOnInit(): void {
    
  }

  logout() {
    this.logedin.logOut();
  }
}
