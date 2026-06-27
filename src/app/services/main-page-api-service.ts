import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PostData } from "../models/post_data";
import { ImageData } from "../models/image_data";
import { UserData } from "../models/user_data";
import { ImagePostShipData } from "../models/image_post_ship_data";

@Injectable()
export class MainPageApiService {

    constructor(private httpClient: HttpClient) {

    }

    getPosts(): Observable<Object[]> {

        // return this.httpClient.get<any[]>("/api/GetPosts");

        var image1 = new ImageData(
            1,
            "assets/images/default_post_image.jpg"
        )
        var image2 = new ImageData(
            2,
            "assets/images/default_post_image_2.jpg"
        )
        
        var user1 = new UserData(
            1,
            "Jane",
            "",
            "",
            "assets/images/default_avatar.jpg",
            "",
            "",
            "",
            "",
            "",
            "13.06.2019",
            "",
        )
        var post1 = new PostData(
            1, 
            "Hello", 
            user1,
            "13.06.2019"
        )
        var post2 = new PostData(
            2, 
            "Hello Hello Hello", 
            user1,
            "13.06.2119"
        )

        var imagePostShip1 = new ImagePostShipData(
            1,
            post1,
            image1
        )
        var imagePostShip2 = new ImagePostShipData(
            2,
            post2,
            image2
        )

        var postShipPair1 = {
            post: post1,
            imageShip: imagePostShip1,
        }
        var postShipPair2 = {
            post: post2,
            imageShip: imagePostShip2,
        }

        return of([
            postShipPair1,
            postShipPair2,
        ]);
    }

    savePost(post: any): Observable<void> { /** Тут any нужно заменить на класс для постов  */
        // return this.httpClient.post<void>("/api/SavePost", post);
        return of(undefined);
    }
}