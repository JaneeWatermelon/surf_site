import { Component, QueryList, signal, ViewChildren } from '@angular/core';
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
    form.control.markAllAsTouched();
    
    queueMicrotask(() => {
      console.log(this.registration_data);

        if (this.inputs.some(input => input.invalid)) {
            return;
        }

        const formData = new FormData();

        formData.append("login", this.registration_data.login);
        formData.append("email", this.registration_data.email);
        formData.append("password", this.registration_data.password);
        formData.append("passwordRepeat", this.registration_data.passwordRepeat);

        formData.append("firstName", this.registration_data.firstName);
        formData.append("secondName", this.registration_data.secondName);
        formData.append("contactInfo", this.registration_data.contactInfo);
        formData.append("about", this.registration_data.about);
        formData.append("achivements", this.registration_data.achivements);

        if (this.registration_data.avatar) {
            formData.append("avatar", this.registration_data.avatar);
        }

        this.registrationApiService
        .register(formData)
        .pipe(first())
        .subscribe({
          next: () => {
            console.log("next");
            this.registration_data = new RegistrationData();

            // Переход на страницу авторизации
            this.navAuthorisation();
          },
          error: (err) => {
            console.error(err);
            // Здесь позже можно вывести сообщение об ошибке
            // например "Пользователь с таким email уже существует"
          }
        });
    });
  }

  navAuthorisation() {
    this.router.navigate(["authorisation"]);
  }

  @ViewChildren(FormInputWithLabelComponent)
  inputs!: QueryList<FormInputWithLabelComponent>;
}
