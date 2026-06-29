import { Component, QueryList, signal, ViewChildren } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { FormInputWithLabelComponent } from '../include/form-input-with-label';
import { LoginData } from '../../models/login_data';
import { NgForm } from '@angular/forms';
import { LoginApiService } from '../../services/login-api-service';
import { first } from 'rxjs';

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

  is_authenticated: boolean = false;

  constructor(private router: Router, private loginApiService: LoginApiService) {

  }

  login(form: NgForm) {
    form.control.markAllAsTouched();
    
    queueMicrotask(() => {

        if (this.inputs.some(input => input.invalid)) {
            return;
        }

        this.loginApiService
        .login(this.login_data)
        .pipe(first())
        .subscribe(user => {
          this.is_authenticated = !!user;
        });
    });
  }

  @ViewChildren(FormInputWithLabelComponent)
  inputs!: QueryList<FormInputWithLabelComponent>;

  navRegistration() {
    this.router.navigate(["registration"]);
  }
}
