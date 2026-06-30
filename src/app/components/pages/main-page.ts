import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { HeaderComponent } from '../include/header';
import { PostAddData } from '../../models/post_add_data';
import { FormFileInputComponent } from '../include/form-file-input';
import { MainPageApiService } from '../../services/main-page-api-service';
import { first } from 'rxjs';
import { FormInputWithLabelComponent } from '../include/form-input-with-label';
import { AuthService } from '../../services/auth-service';
import { LoginApiService } from '../../services/login-api-service';
import { UserData } from '../../models/user_data';

/**
 * Главная страница
 */
@Component({
  selector: 'main-page',
  imports: [...SHARED_IMPORTS, FormModalComponent, FormFileInputComponent, FormInputWithLabelComponent],
  templateUrl: './main-page.html',
  standalone: true,
  providers: [MainPageApiService]
  //   styleUrl: './app.css'
})
export class MainPage {
  post_add_data: PostAddData = new PostAddData();
  posts: any[] = [];

  constructor(
    private router: Router, 
    private mainPageApiService: MainPageApiService, 
    private loginApiService: LoginApiService, 
    private authService: AuthService
  ) {

    this.loginApiService
    .get_user_by_id(1)
    .pipe(first())
    .subscribe({
      next: user => {
          this.authService.login(user);
          // this.router.navigate(['']);
      },
      error: err => {
          console.error(err);
      }
    });
  }

  getPosts() {
    this.mainPageApiService.getPosts().pipe(first()).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

  savePost() {
    this.mainPageApiService
      .savePost(this.post_add_data)
      .pipe(first())
      .subscribe(() => {
        console.log("Пост сохранен");
        this.post_add_data = new PostAddData();

        this.getPosts();
      });
  }

}
