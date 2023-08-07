import { Validators } from "@angular/forms";
import { Input } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<Input> = [
    {
        label: "Email",
        controlName: "email",
        validators: [Validators.required],
        type: "email",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Confirme o email",
        controlName: "emailConfirm",
        validators: [Validators.required],
        type: "email",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: "00.000.000/0000-00"
    },
    {
        label: "Senha",
        controlName: "password",
        validators: [Validators.required],
        type: "password",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Confirme a Senha",
        controlName: "passwordConfirm",
        validators: [Validators.required],
        type: "password",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
];