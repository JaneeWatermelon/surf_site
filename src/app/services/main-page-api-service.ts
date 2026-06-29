import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PostData } from "../models/post_data";
import { ImageData } from "../models/image_data";
import { UserData } from "../models/user_data";
import { ImagePostShipData } from "../models/image_post_ship_data";
import { PostAddData } from "../models/post_add_data";

@Injectable()
export class MainPageApiService {

    constructor(private httpClient: HttpClient) {

    }

    getPosts(): Observable<PostData[]> {
        return this.httpClient.get<PostData[]>("http://localhost:5283/api/Posts/Get");

    }

    savePost(data: PostAddData): Observable<PostData> {
        return this.httpClient.post<PostData>("http://localhost:5283/api/Posts/Create", data);

    }
}