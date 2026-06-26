export class UserData {
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
    created_at: string;
    updated_at: string;

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
        created_at: string = "",
        updated_at: string = ""
    ) {
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
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}