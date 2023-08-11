import { Injectable } from "@angular/core";
import { Token } from "../utils/types/token/token.types";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiUrlService } from "./api-url.service";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class CompanyService {

    /** 
     * Global properties
     */

    private readonly token: Token = this.authService.token();


    /** 
     * Class constructor
     */

    constructor(
        private readonly http: HttpClient,
        private readonly apiUrlService: ApiUrlService,
        private readonly authService: AuthService,
    ) { }


    /** 
    * Method to create an company on database
    * @param data
    * @returns Observable<Object>
    */

    public create(data: any): Observable<Object> {
        const path: Array<any> = ['company'];
        return this.http.post(this.apiUrlService.url(path), data, this.token);
    }


    /** 
     * Method to get all companies on database
     * @returns Observable<Object>
     */

    public getAll(): Observable<any> {
        const path: Array<any> = ['company'];
        return this.http.get(this.apiUrlService.url(path), this.token)
    }


    /** 
     * Method to update an company on database
     * @param id
     * @param data
     * @returns Observable<Object>
     */

    public update(id: number, data: any): Observable<Object & Object> {
        const path: Array<any> = ['company', id];
        return this.http.patch(this.apiUrlService.url(path), data, this.token);
    }


    /** 
     * Method to delete an company on database
     * @param id
     * @returns Observable<Object> 
     */

    public delete(id: number): Observable<Object> {
        const path: Array<any> = ['company', id];
        return this.http.delete(this.apiUrlService.url(path), this.token);
    }

}