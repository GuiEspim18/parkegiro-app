import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ValueService {

    /** 
     * Global properties
     */

    private valueSubject: Subject<number> = new Subject<number>();

    public value: Observable<number> = this.valueSubject.asObservable();

    constructor () {}


    /** 
     * Method to update the form value
     * @param num
     */

    public updateValue(num: number): void {
        this.valueSubject.next(num);
    }

}