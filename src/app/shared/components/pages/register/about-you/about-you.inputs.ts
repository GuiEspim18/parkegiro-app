import { Validators } from "@angular/forms";
import { Input } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<Input> = [
    {
        label: "Nome de usuário",
        controlName: "username",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
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
        label: "Sobrenome",
        controlName: "surname",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "CPF",
        controlName: "cpf",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: "000.000.000-00"
    },
    {
        label: "Data de nascimento",
        controlName: "birthdate",
        validators: [Validators.required],
        type: "date",
        changeEvent: true,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Celular",
        controlName: "cellphone",
        validators: [Validators.required],
        type: "text",
        changeEvent: true,
        blurEvent: false,
        value: "",
        inputMak: "(00)00000-0000"
    },
    {
        label: "Telefone",
        controlName: "telephone",
        validators: [],
        type: "text",
        changeEvent: true,
        blurEvent: false,
        value: "",
        inputMak: "(00)0000-0000 || (00)00000-0000"
    }
];