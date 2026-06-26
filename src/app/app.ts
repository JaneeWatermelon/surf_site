import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/include/header';
import { SHARED_IMPORTS } from './shared-imports';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ...SHARED_IMPORTS, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('surf');
}
