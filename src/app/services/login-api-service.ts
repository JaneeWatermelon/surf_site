import { Observable, of } from "rxjs";
import { UserData } from "../models/user_data";
import { LoginData } from "../models/login_data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

    constructor(private httpClient: HttpClient) {

    }

    login(data: LoginData): Observable<UserData> {
        return this.httpClient.post<UserData>("http://localhost:5283/api/Users/Login", data);

    }
}