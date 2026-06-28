import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { FormInputWithLabelComponent } from '../include/form-input-with-label';
import { LoginData } from '../../models/login_data';

/**
 * Главная страница
 */
@Component({
  selector: 'authorisation',
  imports: [...SHARED_IMPORTS, FormModalComponent, FormInputWithLabelComponent],
  templateUrl: './authorisation.html',
  styles: [`
    :host {
      display: inline-block;
      height: 100%;
      width: 100%;
    }  
  `]
})
export class Authorisation {
  login_data: LoginData = new LoginData();

  constructor(private router: Router) {

  }

  navRegistration() {
    this.router.navigate(["registration"]);
  }
}
