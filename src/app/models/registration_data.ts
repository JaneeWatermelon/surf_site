export class RegistrationData {
    nickname: string = "";
    email: string = "";
    password: string = "";
    password_repeat: string = "";

    last_name: string = "";
    first_name: string = "";

    photo: File | null = null;

    contacts: string = "";
    about: string = "";
    achievements: string = "";
}