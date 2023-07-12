import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  /* Vars */

  private form: FormGroup = new FormGroup({
    "userName": new FormControl("", [Validators.required]),
    "name": new FormControl("", [Validators.required]),
    "surname": new FormControl("", [Validators.required]),
    "cpf": new FormControl("", [Validators.required]),
    "zipCode": new FormControl("", [Validators.required]),
    "street": new FormControl("", [Validators.required]),
    "number": new FormControl("", [Validators.required]),
    "compliment": new FormControl(""),
    "password": new FormControl("", [Validators.required, Validators.minLength(8)]),
    "passwordConfirm": new FormControl("", [Validators.required, Validators.minLength(8)]),
    "email": new FormControl("", [Validators.required]),
    "birthdate": new FormControl("", [Validators.required]),
    "company": new FormControl("", [Validators.required]),
    "cnpj": new FormControl("", [Validators.required]),
    "cellphone": new FormControl("", [Validators.required]),
    "telephone": new FormControl("")
  })

  public inputs: Array<any> = [
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
  ]


  constructor() { }


  ngOnInit(): void {
  }

  public getBlurEvent(event: any): void {
    if (event.controlName === "birthdate") this.form.get(event.controlName)?.setValue(event.value)
    console.log(this.form.value)
  }

  public getKeyUpEvent(event: any): void {
    this.form.get(event.controlName)?.setValue(event.value)
    console.log(this.form.value)
  }

  public getChangeEvent(event: any): void {
    this.form.get(event.controlName)?.setValue(event.value)
    console.log(this.form.value)
  }

}
