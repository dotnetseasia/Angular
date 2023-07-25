import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

const BaseUrl = environment.endpoint;
@Injectable ({
    providedIn : 'root'
})

export class loginService {
    constructor(private http : HttpClient) { }

    Login(data: any = []) {
        return this.http.post<any>(BaseUrl + 'User/AuthenticateUser', data)
    }
}
