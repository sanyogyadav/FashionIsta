import { Component, OnInit } from '@angular/core';
import { LoggedinServiceService } from 'src/app/services/loggedin/loggedin-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private logedin: LoggedinServiceService) {}

  ngOnInit(): void { }

  logout() {
    this.logedin.logOut();
  }
}
