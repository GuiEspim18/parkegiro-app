import { AbstractControl, ValidationErrors } from "@angular/forms";

export type Input = {
    label: string,
    controlName: string,
    validators: Array<((control: AbstractControl) => ValidationErrors | null)>,
    type: string,
    changeEvent: boolean,
    blurEvent: boolean,
    value: string,
    inputMak: string
};