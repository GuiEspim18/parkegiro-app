import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AboutYou } from "../utils/types/about-you/about-you";

@Injectable({
    providedIn: "root"
})
export class SaveDataService {

    /** 
     * Global properties
     */

    private aboutYouSubject: BehaviorSubject<AboutYou> = new BehaviorSubject<AboutYou>({
        username: "",
        name: "",
        surname: "",
        cpf: "",
        birthdate: null
    });

    public aboutYou: Observable<AboutYou> = this.aboutYouSubject.asObservable();


    /** 
     * Class constructor
     */

    constructor () {}


    /** 
     * Method to sabe about you information
     * @param data
     */

    public saveAboutYou(data: any): void {
        for (let item in data) {
            this.aboutYou.subscribe((element: any) => {
                element[item] = data[item];
            });
        }
    }

}