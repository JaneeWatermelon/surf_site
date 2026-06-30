import { BaseEntityData } from "./base_entity_data";

export class UserData extends BaseEntityData {
    id: number;
    login: string;
    email: string;
    password: string;
    avatar: string;
    second_name: string;
    first_name: string;
    contact_info: string;
    about: string;
    achievements: string;

    constructor(
        id: number = 0,
        login: string = "",
        email: string = "",
        password: string = "",
        avatar: string = "",
        second_name: string = "",
        first_name: string = "",
        contact_info: string = "",
        about: string = "",
        achievements: string = "",
        creationDateTime: string = "",
        lastModificationDateTime: string = ""
    ) {
        super(creationDateTime, lastModificationDateTime);

        this.id = id;
        this.login = login;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.second_name = second_name;
        this.first_name = first_name;
        this.contact_info = contact_info;
        this.about = about;
        this.achievements = achievements;
    }
}