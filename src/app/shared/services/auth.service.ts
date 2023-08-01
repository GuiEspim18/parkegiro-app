import { Injectable } from "@angular/core";
import { Token } from "../utils/types/token/token.types";
import { Observable } from "rxjs";
import { ApiUrlService } from "./api-url.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private readonly apiUrlService: ApiUrlService,
        private readonly http: HttpClient,
        private readonly router: Router
    ) { }


    /** 
     * Method to save the token on localstorage
     */

    public save(data: any): void {
        for (let i in data) localStorage.setItem(i, typeof (data[i]) === "object" ? JSON.stringify(data[i]) : data[i]);
    }


    /** 
     * Method to generate the token to the body api request
     */

    public token(): Token {
        const token: Token = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        };
        return token;
    }


    /** 
     * Method to verify if token is valid
     * @return Observable<Object>
     */

    public verify(): void{
        const path: Array<any> = ['auth', 'verify'];
        this.http.patch(this.apiUrlService.url(path), this.token()).subscribe((element: any) => {
            if (!element) this.router.navigateByUrl('/login');
        });
    }

}