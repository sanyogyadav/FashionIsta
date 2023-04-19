import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedinServiceService {

  token!: string;
  userId!: string;

  constructor() {
    this.token = localStorage.getItem('token') || ''
    this.userId = localStorage.getItem('userid') || ''
  }

  isLogedIn(): boolean {
    if (this.token) {
      console.log(this.token, this.userId);
      return true;
    }
    else {
      return false;
    }
  }

  getToken(): string {
    return this.token;
  }

  getUserId(): string {
    return this.userId;
  }

  logOut(): any {
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('AdminToken')
    this.token = ''
    this.userId = ''
  }
}
