import { Validators } from "@angular/forms";
import { Input } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<Input> = [
    {
        label: "CEP",
        controlName: "zipCode",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: true,
        value: "",
        inputMak: "00000-000"
    },
    {
        label: "Rua",
        controlName: "street",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Número",
        controlName: "number",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Complemento",
        controlName: "compliment",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Estado",
        controlName: "state",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: true,
        value: "",
        inputMak: ""
    },
    {
        label: "Cidade",
        controlName: "city",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: true,
        value: "",
        inputMak: ""
    }
];