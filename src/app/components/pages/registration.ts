import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { FormInputWithLabelComponent } from '../include/form-input-with-label';
import { FormFileInputComponent } from '../include/form-file-input';
import { RegistrationData } from '../../models/registration_data';
import { RegistrationApiService } from '../../services/registration-api-service';
import { first } from 'rxjs';
import { UserData } from '../../models/user_data';
import { FormInputErrorsComponent } from '../include/form-input-errors';
import { NgForm } from '@angular/forms';

/**
 * Главная страница
 */
@Component({
  selector: 'registration',
  imports: [...SHARED_IMPORTS, FormModalComponent, FormInputWithLabelComponent, FormFileInputComponent, FormInputErrorsComponent],
  templateUrl: './registration.html',
  //   styleUrl: './app.css'
})
export class Registration {
  registration_data: RegistrationData = new RegistrationData();
  users: UserData[] = [];

  constructor(private router: Router, private registrationApiService: RegistrationApiService) {

  }

  register(form: NgForm) {
    console.log(form.invalid);
    form.control.markAllAsTouched();
    if (form.invalid) {
        form.control.markAllAsTouched();
        return;
    }
    // if (
    //     !this.registration_data.nickname ||
    //     !this.registration_data.email ||
    //     !this.registration_data.password ||
    //     !this.registration_data.password_repeat
    // ) {
    //     return;
    // }

    this.registrationApiService
      .register(this.registration_data)
      .pipe(first())
      .subscribe(() => {
        this.registration_data = new RegistrationData();

        this.getUsers();
      });
  }
  getUsers() {
    this.registrationApiService
      .getUsers()
      .pipe(first())
      .subscribe(users => {
        this.users = users;
      });
  }

  navAuthorisation() {
    this.router.navigate(["authorisation"]);
  }
}
