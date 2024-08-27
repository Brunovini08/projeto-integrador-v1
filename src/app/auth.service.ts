import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAdmin = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.isAdmin = true;
      return true;
    }
    return false;
  }
  
  logout(): void {
    this.isAdmin = false;
  }

  isAuthenticated(): boolean {
    return this.isAdmin;
  }
}

