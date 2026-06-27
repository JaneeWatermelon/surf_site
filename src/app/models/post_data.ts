import { UserData } from "./user_data";

export class PostData {
    id: number;
    text: string;
    author: UserData;
    created: string;

    constructor(
        id: number = 0, 
        text: string = "", 
        author: UserData = new UserData(),
        created: string = ""
    ) {
        this.id = id;
        this.text = text;
        this.author = author;
        this.created = created;
    }
}