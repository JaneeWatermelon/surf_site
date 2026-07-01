import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { UserData } from '../models/user_data';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private platformId = inject(PLATFORM_ID);

  readonly currentUser = signal<UserData | null>(null);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.currentUser.set(this.loadUser());
    }
  }

  login(user: UserData, remember: boolean) {
      this.currentUser.set(user);

      if (remember) {
          localStorage.setItem("user", JSON.stringify(user));
      } else {
          sessionStorage.setItem("user", JSON.stringify(user));
      }
  }

  logout() {
      this.currentUser.set(null);
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }

  private loadUser(): UserData | null {
      const json =
          localStorage.getItem("user") ??
          sessionStorage.getItem("user");

      return json ? JSON.parse(json) : null;
  }
}