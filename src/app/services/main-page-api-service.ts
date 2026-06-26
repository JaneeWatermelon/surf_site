import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PostData } from "../models/post_data";

@Injectable()
export class MainPageApiService {

    constructor(private httpClient: HttpClient) {

    }

    getPosts(): Observable<PostData[]> {

        // return this.httpClient.get<any[]>("/api/GetPosts");

        return of([
            new PostData(
                1, 
                "Hello", 
                "assets/images/default_post_image.jpg",
                "awdawfwa",
                "13.06.2019"
            ),
            new PostData(
                2, 
                "Sample text Sample text Sample text Sam Sample text, Sample text Sample text Sample text Sample text Sample text - Sample text Sample text Sample text. Sample text!!", 
                "assets/images/default_post_image.jpg",
                "pokgdrpj",
                "13.06.2026"
            ),
        ]);
    }

    savePost(post: any): Observable<void> { /** Тут any нужно заменить на класс для постов  */
        // return this.httpClient.post<void>("/api/SavePost", post);
        return of(undefined);
    }
}