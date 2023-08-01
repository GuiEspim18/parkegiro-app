import { Validators } from "@angular/forms";
import { Input } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<Input> = [
    {
        label: "Nome de usuário",
        controlName: "userName",
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
        label: "Celular",
        controlName: "cellphone",
        validators: [Validators.required],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: "(00)00000-0000"
    },
    {
        label: "Telefone fixo",
        controlName: "telephone",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: "(00)0000-0000"
    },
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
        label: "Senha",
        controlName: "password",
        validators: [Validators.required, Validators.minLength(8)],
        type: "password",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Confirme a senha",
        controlName: "passwordConfirm",
        validators: [Validators.required, Validators.minLength(8)],
        type: "password",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Empresa",
        controlName: "company",
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
];