import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  auth = inject(AuthService);

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