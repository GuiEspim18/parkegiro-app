import { TInput } from "src/app/shared/utils/types/input/input.type";

export const inputs: Array<TInput> = [
    {
        label: "Nome de usuário",
        controlName: "username",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Nome",
        controlName: "name",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "Sobrenome",
        controlName: "surname",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "CPF",
        controlName: "cpf",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: "000.000.000-00"
    },
    {
        label: "Data de nascimento",
        controlName: "birthdate",
        validators: [],
        type: "date",
        changeEvent: true,
        blurEvent: false,
        value: "",
        inputMak: ""
    },
    {
        label: "CEP",
        controlName: "zipCode",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: true,
        value: "",
        inputMak: "00000-000"
    },
    {
        label: "Rua",
        controlName: "street",
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
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: true,
        value: "",
        inputMak: ""
    },
    {
        label: "Cidade",
        controlName: "city",
        validators: [],
        type: "text",
        changeEvent: false,
        blurEvent: true,
        value: "",
        inputMak: ""
    },
    {
        label: "Número",
        controlName: "number",
        validators: [],
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
        validators: [],
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
        validators: [],
        type: "email",
        changeEvent: false,
        blurEvent: false,
        value: "",
        inputMak: ""
    }
];