import { BaseEntityData } from "./base_entity_data";

export class ImageData extends BaseEntityData {
    id: number;
    code: string;

    constructor(
        id: number = 0,
        code: string = "",
        creationDateTime: string = "",
        lastModificationDateTime: string = ""
    ) {
        super(creationDateTime, lastModificationDateTime);

        this.id = id;
        this.code = code;
    }
}