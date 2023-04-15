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

  logOut():void {
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    this.token = ''
    this.userId = ''
    window.location.reload();
  }
}
