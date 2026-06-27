import { PostData } from "./post_data";
import { ImageData } from "./image_data";

export class ImagePostShipData {
    id: number;
    post: PostData;
    image: ImageData;

    constructor(
        id: number = 0,
        post: PostData = new PostData(),
        image: ImageData = new ImageData(),
    ) {
        this.id = id;
        this.post = post;
        this.image = image;
    }
}