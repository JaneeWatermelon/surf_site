import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { HeaderComponent } from '../include/header';
import { Post_add_data } from '../../models/post_add_data';
import { FormFileInputComponent } from '../include/form-file-input';
import { MainPageApiService } from '../../services/main-page-api-service';
import { first } from 'rxjs';

/**
 * Главная страница
 */
@Component({
  selector: 'main-page',
  imports: [...SHARED_IMPORTS, FormModalComponent, FormFileInputComponent],
  templateUrl: './main-page.html',
  standalone: true,
  providers: [MainPageApiService]
//   styleUrl: './app.css'
})
export class MainPage {
  post_add_data: Post_add_data = new Post_add_data();
  posts: any[] = [];

  constructor(private router: Router, 
    private mainPageApiService: MainPageApiService) {

  }
  
  getPosts() {
    this.mainPageApiService.getPosts().pipe(first()).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  savePost() {
    this.mainPageApiService.savePost({post: "Пост"}).pipe(first()).subscribe(() => {
      console.log("Пост сохранен");
    });
  }
}
