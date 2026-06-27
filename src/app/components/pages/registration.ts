import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { FormInputWithLabelComponent } from '../include/form-input-with-label';
import { FormFileInputComponent } from '../include/form-file-input';
import { RegistrationData } from '../../models/registration_data';

/**
 * Главная страница
 */
@Component({
  selector: 'registration',
  imports: [...SHARED_IMPORTS, FormModalComponent, FormInputWithLabelComponent, FormFileInputComponent],
  templateUrl: './registration.html',
//   styleUrl: './app.css'
})
export class Registration {
  registration_data: RegistrationData = new RegistrationData();

  constructor(private router: Router) {

  }

  navAuthorisation() {
    this.router.navigate(["authorisation"]);
  }
}
