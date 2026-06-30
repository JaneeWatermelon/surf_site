import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  protected readonly environment = environment;
  auth = inject(AuthService);

  currentUser = this.auth.currentUser;

  constructor(private router: Router) {

  }

  navRegistration() {
    this.router.navigate(["registration"]);
  }
  navAuthorisation() {
    this.router.navigate(["authorisation"]);
  }
  navHome() {
    this.router.navigate([""]);
  }
}