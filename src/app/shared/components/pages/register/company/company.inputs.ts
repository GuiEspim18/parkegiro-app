import { Validators } from "@angular/forms";
import { Input } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<Input> = [
    {
        label: "Nome",
        controlName: "name",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "CNPJ",
        controlName: "cnpj",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: "00.000.000/0000-00"
    },
    {
        label: "Email do estacionamento",
        controlName: "email",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Contato do estacionamento",
        controlName: "phone",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: "(00)0000-0000 || (00)00000-0000"
    },
];