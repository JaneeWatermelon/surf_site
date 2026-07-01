import { ChangeDetectorRef, Component, QueryList, signal, ViewChildren } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { FormInputWithLabelComponent } from '../include/form-input-with-label';
import { LoginData } from '../../models/login_data';
import { NgForm } from '@angular/forms';
import { LoginApiService } from '../../services/login-api-service';
import { first } from 'rxjs';
import { AuthService } from '../../services/auth-service';
import { FormCheckboxComponent } from '../include/form-checkbox';

/**
 * Главная страница
 */
@Component({
  selector: 'authorisation',
  imports: [...SHARED_IMPORTS, FormModalComponent, FormInputWithLabelComponent, FormCheckboxComponent],
  templateUrl: './authorisation.html',
  styles: [`
    :host {
      display: inline-block;
      height: 100%;
      width: 100%;
    }  
  `],
  providers: [LoginApiService]
})
export class Authorisation {
  login_data: LoginData = new LoginData();
  serverErrors: Record<string, string[]> = {};

  is_authenticated: boolean = false;

  constructor(
    private router: Router, 
    private loginApiService: LoginApiService, 
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {

  }

  login(form: NgForm) {
    form.control.markAllAsTouched();
    
    queueMicrotask(() => {

        if (this.inputs.some(input => input.invalid)) {
          return;
        }

        this.serverErrors = {};

        this.loginApiService
        .login(this.login_data)
        .pipe(first())
        .subscribe({
          next: user => {
              this.authService.login(user);
              this.router.navigate(['']);
          },
          error: err => {
              console.error(err);
              this.serverErrors = err.error.errors ?? {};

              this.cdr.detectChanges();
          }
        });
    });
  }

  @ViewChildren(FormInputWithLabelComponent)
  inputs!: QueryList<FormInputWithLabelComponent>;

  navRegistration() {
    this.router.navigate(["registration"]);
  }
}
