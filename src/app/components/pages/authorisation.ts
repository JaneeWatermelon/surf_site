import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';

/**
 * Главная страница
 */
@Component({
  selector: 'authorisation',
  imports: [...SHARED_IMPORTS, FormModalComponent],
  templateUrl: './authorisation.html',
//   styleUrl: './app.css'
})
export class Authorisation {
//   protected readonly title = signal('surf');
}
