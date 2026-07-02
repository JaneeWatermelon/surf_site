import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PostData } from "../models/post_data";
import { PostWithImagesData } from "../models/post_with_images_data";

@Injectable()
export class MainPageApiService {

    constructor(private httpClient: HttpClient) {

    }

    getPosts(): Observable<PostWithImagesData[]> {
        return this.httpClient.get<PostWithImagesData[]>("http://localhost:5283/api/Posts/Get");

    }

    savePost(data: FormData): Observable<PostData> {
        return this.httpClient.post<PostData>("http://localhost:5283/api/Posts/Create", data);

    }
}