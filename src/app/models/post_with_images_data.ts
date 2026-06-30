import { PostData } from "./post_data";
import { ImageData } from "./image_data";

export class PostWithImagesData {
    post: PostData = new PostData();
    images: ImageData[] = [];
}