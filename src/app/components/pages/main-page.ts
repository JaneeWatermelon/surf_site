import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, QueryList, signal, ViewChildren } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared-imports';
import { FormModalComponent } from '../include/form-modal';
import { PostAddData } from '../../models/post_add_data';
import { FormFileInputComponent } from '../include/form-file-input';
import { MainPageApiService } from '../../services/main-page-api-service';
import { first } from 'rxjs';
import { FormInputWithLabelComponent } from '../include/form-input-with-label';
import { AuthService } from '../../services/auth-service';
import { LoginApiService } from '../../services/login-api-service';
import { UserData } from '../../models/user_data';
import { PostWithImagesData } from '../../models/post_with_images_data';
import { environment } from '../../../environments/environment';

/**
 * Главная страница
 */
@Component({
  selector: 'main-page',
  imports: [...SHARED_IMPORTS, FormModalComponent, FormFileInputComponent, FormInputWithLabelComponent],
  templateUrl: './main-page.html',
  standalone: true,
  providers: [MainPageApiService],
  changeDetection: ChangeDetectionStrategy.OnPush
  //   styleUrl: './app.css'
})
// export class MainPage {
//   auth = inject(AuthService);
//   protected readonly environment = environment;

//   post_add_data: PostAddData = new PostAddData();

//   object_list = signal<PostWithImagesData[]>([]);
//   current_user = signal<UserData | null>(null);
//   serverErrors = signal<Record<string, string[]>>({});

//   constructor(
//     private router: Router, 
//     private mainPageApiService: MainPageApiService, 
//     private loginApiService: LoginApiService, 
//     private authService: AuthService,
//     private cdr: ChangeDetectorRef,
//   ) {
//     this.current_user = this.authService.currentUser();

//     this.serverErrors = {};

//     this.getPosts();
//   }

//   @ViewChildren(FormInputWithLabelComponent)
//   inputs!: QueryList<FormInputWithLabelComponent>;

//   getPosts() {
//     this.mainPageApiService.getPosts().pipe(first()).subscribe(posts => {
//       console.log(posts);
//       this.object_list = posts;
//       // this.cdr.detectChanges();
//     });
//   }

//   savePost() {
//     if (this.inputs.some(input => input.invalid)) {
//         return;
//     }

//     const formData = new FormData();

//     console.log(this.current_user);
//     console.log(this.post_add_data);

//     if (this.current_user == null) {
//       return;
//     }

//     formData.append("authorId", this.current_user.id.toString());
//     formData.append("text", this.post_add_data.text);

//     if (this.post_add_data.image) {
//         formData.append("image", this.post_add_data.image);
//     }

//     this.serverErrors = {};
    
//     this.mainPageApiService
//       .savePost(formData)
//       .pipe(first())
//       .subscribe({
//         next: () => {
//           console.log("Пост сохранен");
//           this.post_add_data = new PostAddData();

//           this.getPosts();
//           this.cdr.detectChanges();
//         },
//         error: (err) => {
//           console.error(err);
//           this.serverErrors = err.error.errors ?? {};
//           console.log(this.serverErrors);
          
//           this.cdr.detectChanges();
//         }
//       });
//       this.cdr.detectChanges();
//     }
    

// }

export class MainPage {
  auth = inject(AuthService);
  protected readonly environment = environment;

  post_add_data = new PostAddData();
  
  // Используйте сигналы для реактивных данных
  object_list = signal<PostWithImagesData[]>([]);
  current_user = signal<UserData | null>(null);
  serverErrors = signal<Record<string, string[]>>({});

  constructor(
    private router: Router, 
    private mainPageApiService: MainPageApiService, 
    private loginApiService: LoginApiService, 
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) {
    this.current_user.set(this.authService.currentUser());
    this.getPosts();
  }

  getPosts() {
    this.mainPageApiService.getPosts().pipe(first()).subscribe(posts => {
      console.log(posts);
      this.object_list.set(posts);
      // this.cdr.detectChanges();
    });
  }

  @ViewChildren(FormInputWithLabelComponent)
  inputs!: QueryList<FormInputWithLabelComponent>;

  savePost() {
    if (this.inputs.some(input => input.invalid)) {
      return;
    }

    const formData = new FormData();
    const user = this.current_user();

    if (!user) {
      return;
    }

    formData.append("authorId", user.id.toString());
    formData.append("text", this.post_add_data.text);

    if (this.post_add_data.image) {
      formData.append("image", this.post_add_data.image);
    }

    this.serverErrors.set({});
    
    this.mainPageApiService
      .savePost(formData)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log("Пост сохранен");
          this.post_add_data = new PostAddData();
          this.getPosts();
        },
        error: (err) => {
          console.error(err);
          this.serverErrors.set(err.error.errors ?? {});
          console.log(this.serverErrors());
          // this.cdr.detectChanges();
        }
      });
  }
}