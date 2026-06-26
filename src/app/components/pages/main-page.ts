import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { HeaderComponent } from '../include/header';

/**
 * Главная страница
 */
@Component({
  selector: 'main-page',
  imports: [...SHARED_IMPORTS, FormModalComponent],
  templateUrl: './main-page.html',
  standalone: true,
//   styleUrl: './app.css'
})
export class MainPage {

}
