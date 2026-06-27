export class ImageData {
    id: number;
    code: string;
    created_at: string;
    updated_at: string;

    constructor(
        id: number = 0,
        code: string = "",
        created_at: string = "",
        updated_at: string = ""
    ) {
        this.id = id;
        this.code = code;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}