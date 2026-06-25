import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '../shared-imports';
import { Router } from '@angular/router';

/**
 * Главная страница
 */
@Component({
  selector: 'main',
  imports: [...SHARED_IMPORTS],
  templateUrl: './main-page.html',
  standalone: true
})
export class MainPage {

    constructor(private router: Router) {

    }

    onClick() {
        this.router.navigate(["another"]);
    }
}