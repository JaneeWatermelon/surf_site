import { BaseEntityData } from "./base_entity_data";
import { UserData } from "./user_data";

export class PostData extends BaseEntityData {
    id: number;
    text: string;
    author: UserData;

    constructor(
        id: number = 0, 
        text: string = "", 
        author: UserData = new UserData(),
        creationDateTime: string = "",
        lastModificationDateTime: string = ""
    ) {
        super(creationDateTime, lastModificationDateTime);

        this.id = id;
        this.text = text;
        this.author = author;
    }
}