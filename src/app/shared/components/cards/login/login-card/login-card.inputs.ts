import { Validators } from "@angular/forms";
import { Input } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<Input> = [
    {
        label: "Email",
        controlName: "email",
        validators: [Validators.required, Validators.email],
        type: "email",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Senha",
        controlName: "password",
        validators: [Validators.required, Validators.minLength(8)],
        type: "password",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    }
];