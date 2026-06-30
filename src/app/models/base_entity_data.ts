export class BaseEntityData {
    creationDateTime: string;
    lastModificationDateTime: string;

    constructor(
        creationDateTime: string = "",
        lastModificationDateTime: string = ""
    ) {
        this.creationDateTime = creationDateTime;
        this.lastModificationDateTime = lastModificationDateTime;
    }
}