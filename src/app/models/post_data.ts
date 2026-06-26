import { UserData } from "./user_data";

export class PostData {
    id: number = 0;
    text: string = "";
    file_path: string = "";
    author: UserData = new UserData();
    created: string = "";

    constructor(
        id: number, 
        text: string, 
        file_path: string,
        author: string,
        created: string
    ) {
        this.id = id;
        this.text = text;
        this.file_path = file_path;
        this.author = author;
        this.created = created;
    }
}