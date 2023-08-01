import { Validators } from "@angular/forms";
import { Input } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<Input> = [
    {
        label: "Placa",
        controlName: "plate",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: true,
        value: "",
        inputMak: "SSS-0A00"
    },
    {
        label: "Marca",
        controlName: "brand",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Modelo",
        controlName: "model",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Cor",
        controlName: "color",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
];