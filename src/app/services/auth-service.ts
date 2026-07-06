import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { UserData } from '../models/user_data';
import { isPlatformBrowser } from '@angular/common';
import { LoginApiService } from './login-api-service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private platformId = inject(PLATFORM_ID);
  private tokenKey = 'accessToken';

  readonly currentUser = signal<UserData | null>(null);

  constructor(
    private loginApiService: LoginApiService,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.currentUser.set(this.loadUser());
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(this.tokenKey);
    }
    return null;
  }

  login(user: UserData, remember: boolean, access_token: string) {
      this.currentUser.set(user);

      if (remember && access_token) {
        console.log("remember && access_token");
        // localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("accessToken", access_token);
        sessionStorage.setItem("user", JSON.stringify(user));
      } else {
        console.log("not remember && access_token");
      }
  }

  logout() {
      this.currentUser.set(null);
      // localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      // localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null && this.getToken() !== null;
  }

  private loadUser(): UserData | null {
      const json = sessionStorage.getItem("user");

      return json ? JSON.parse(json) : null;
  }
}