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

    private posts = [
        this.createPostPair(
            1,
            "Hello",
            "assets/images/default_post_image.jpg",
            "13.06.2019"
        ),
        this.createPostPair(
            2,
            "Hello Hello Hello",
            "assets/images/default_post_image_2.jpg",
            "13.06.2119"
        ),
    ];

    constructor(private httpClient: HttpClient) {

    }

    private createImage(id: number, code: string): ImageData {
        return new ImageData(id, code);
    }

    private createUser(): UserData {
        return new UserData(
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
        );
    }

    private createPost(
        id: number,
        text: string,
        author: UserData,
        created: string
    ): PostData {
        return new PostData(
            id,
            text,
            author,
            created
        );
    }

    private createImagePostShip(
        id: number,
        post: PostData,
        image: ImageData
    ): ImagePostShipData {
        return new ImagePostShipData(
            id,
            post,
            image
        );
    }

    private createPostPair(
        id: number,
        text: string,
        imagePath: string,
        created: string
    ) {
        const user = this.createUser();
        const post = this.createPost(id, text, user, created);
        const image = this.createImage(id, imagePath);
        const imageShip = this.createImagePostShip(id, post, image);

        return {
            post,
            imageShip,
        };
    }

    getPosts(): Observable<Object[]> {

        // return this.httpClient.get<any[]>("/api/GetPosts");

        return of([...this.posts]);
    }

    savePost(data: PostAddData): Observable<void> {
        // return this.httpClient.post<void>('/api/posts', data);

        const user = this.createUser();

        const post = this.createPost(
            this.posts.length + 1,
            data.text,
            user,
            new Date().toLocaleString()
        );

        const image = this.createImage(
            this.posts.length + 1,
            data.image
                ? URL.createObjectURL(data.image)
                : 'assets/images/default_post_image.jpg'
        );

        const imageShip = this.createImagePostShip(
            this.posts.length + 1,
            post,
            image
        );

        this.posts.unshift({
            post,
            imageShip,
        });

        return of(undefined);
    }
}