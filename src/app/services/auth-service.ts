import { Injectable, signal } from '@angular/core';
import { UserData } from '../models/user_data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly currentUser = signal<UserData | null>(null);

  login(user: UserData) {
    this.currentUser.set(user);
  }

  logout() {
    this.currentUser.set(null);
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }
}