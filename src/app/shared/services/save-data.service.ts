import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AboutYou } from "../utils/types/about-you/about-you";
import { Address } from "../utils/types/address/address.types";
import { Company } from "../utils/types/company/company.types";
import { Validation } from "../utils/types/validation/validation.types";
import { FormGroup } from "@angular/forms";

type Where = "aboutYou" | "address" | "company" | "validation";

@Injectable({
    providedIn: "root"
})
export class SaveDataService {

    /** 
     * Global properties
     */

    private readonly aboutYouSubject: BehaviorSubject<AboutYou> = new BehaviorSubject<AboutYou>({
        username: "",
        name: "",
        surname: "",
        cpf: "",
        birthdate: null
    });

    public aboutYou: Observable<AboutYou> = this.aboutYouSubject.asObservable();

    private readonly addressSubject: BehaviorSubject<Address> = new BehaviorSubject<Address>({
        cep: "",
        street: "",
        state: "",
        city: "",
        number: "",
        compliment: ""
    });

    public address: Observable<Address> = this.addressSubject.asObservable();

    private readonly companySubject: BehaviorSubject<Company> = new BehaviorSubject<Company>({
        name: "",
        cnpj: "",
        companyEmail: "",
        companyPhone: ""
    });

    public company: Observable<Company> = this.companySubject.asObservable();

    private readonly validationSubject: BehaviorSubject<Validation> = new BehaviorSubject<Validation>({
        email: "",
        password: ""
    });

    public validation: Observable<Validation> = this.validationSubject.asObservable();


    /** 
     * Class constructor
     */

    constructor () {}


    /** 
     * Method to identify the data provided and add it into observable
     * @param where
     * @param data
     */

    public save(where: Where, data: any ): void {
        let obs: Observable<any> = new Observable();
        switch (where) {
            case "aboutYou": obs = this.aboutYou; break;
            case "address": obs = this.address; break;
            case "company": obs = this.company; break;
            case "validation": obs = this.validation; break;
        }
        this.saveData(obs, data)
    }


    /** 
     * Method to get the observable and save data
     * @param obs
     * @param data
     */

    private saveData(obs: Observable<any>, data: any): void {
        for (let item in data) obs.subscribe((element: any) => element[item] = data[item]);
    }

}