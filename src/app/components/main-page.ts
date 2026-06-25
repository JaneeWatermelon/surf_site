import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../shared-imports';

/**
 * Главная страница
 */
@Component({
  selector: 'main-page',
  imports: [...SHARED_IMPORTS],
  templateUrl: './main-page.html',
  standalone: true,
//   styleUrl: './app.css'
})
export class MainPage {

    constructor(private router: Router) {

    }

    onClick() {
        this.router.navigate(["registration"]);
    }
}
