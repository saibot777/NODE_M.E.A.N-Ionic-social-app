import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export const options = {   
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true,
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private _http: HttpClient) {}

    createUser(payload: any): Observable<any> {
        return this._http.post(`${environment.API_BASE_URL}users/register`, payload, options)
    }

    loginUser(payload: any): Observable<any> {
        return this._http.post(`${environment.API_BASE_URL}users/login`, payload, options)
    }

    getUser(id: any): Observable<any> {
        return this._http.get(`${environment.API_BASE_URL}users/${id}`, options)
    }

}