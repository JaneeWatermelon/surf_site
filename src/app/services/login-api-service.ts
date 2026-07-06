import { Observable, of } from "rxjs";
import { UserData } from "../models/user_data";
import { LoginData } from "../models/login_data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginOutData } from "../models/login_out_data";

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

    constructor(private httpClient: HttpClient) {

    }

    login(data: LoginData): Observable<LoginOutData> {
        return this.httpClient.post<LoginOutData>("http://localhost:5283/api/Users/Login", data);

    }

    get_user_by_id(id: number): Observable<UserData> {
        return this.httpClient.get<UserData>(`http://localhost:5283/api/Users/${id}`);

    }
}