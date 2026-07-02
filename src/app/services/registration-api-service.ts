import { Observable, of } from "rxjs";
import { UserData } from "../models/user_data";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegistrationApiService {

    constructor(private httpClient: HttpClient) {

    }

    register(data: FormData): Observable<UserData> {
        return this.httpClient.post<UserData>("http://localhost:5283/api/Users/Register", data);

    }
}