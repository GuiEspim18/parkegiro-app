import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AboutYou } from "../utils/types/about-you/about-you";
import { Address } from "../utils/types/address/address.types";

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

    private addressSubject: BehaviorSubject<Address> = new BehaviorSubject<Address>({
        cep: "",
        street: "",
        state: "",
        city: "",
        number: "",
        compliment: ""
    });

    public address: Observable<Address> = this.addressSubject.asObservable();


    /** 
     * Class constructor
     */

    constructor () {}


    /** 
     * Method to save about you information
     * @param data
     */

    public saveAboutYou(data: any): void {
        for (let item in data) {
            this.aboutYou.subscribe((element: any) => {
                element[item] = data[item];
            });
        }
    }


    /** 
     * Method to save address information
     * @param data
     */

    public saveAddress(data: any): void {
        for (let item in data) {
            this.address.subscribe((element: any) => {
                element[item] = data[item];
            });
        }
    }

}