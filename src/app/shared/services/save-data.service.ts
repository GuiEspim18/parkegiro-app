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
        switch (where) {
            case "aboutYou": this.saveData(this.aboutYou, data); break;
            case "address": this.saveData(this.address, data); break;
            case "company": this.saveData(this.company, data); break;
            case "validation": this.saveData(this.validation, data); break;
        }
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