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
    "userName": new FormControl("", [Validators.required])
  })

  public inputs: Array<any> = [
    {
      label: "Nome de usuário",
      controlName: "userName",
      validators: [Validators.required],
      type: "text",
      blurEvent: false,
      value: "",
      inputMak: ""
    },
    {
      label: "Nome",
      controlName: "name",
      validators: [Validators.required],
      type: "text",
      blurEvent: false,
      value: "",
      inputMak: ""
    },
    {
      label: "Sobrenome",
      controlName: "surname",
      validators: [Validators.required],
      type: "text",
      blurEvent: false,
      value: "",
      inputMak: ""
    },
    {
      label: "CPF",
      controlName: "cpf",
      validators: [Validators.required],
      type: "text",
      blurEvent: true,
      value: "",
      inputMak: "000.000.000-00"
    },
    {
      label: "CEP",
      controlName: "zipCode",
      validators: [Validators.required],
      type: "text",
      blurEvent: true,
      value: "",
      inputMak: "00000-000"
    },
    {
      label: "Rua",
      controlName: "street",
      validators: [Validators.required],
      type: "text",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "Número",
      controlName: "number",
      validators: [Validators.required],
      type: "text",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "Complemento",
      controlName: "compliment",
      validators: [],
      type: "text",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "Senha",
      controlName: "password",
      validators: [Validators.required, Validators.minLength(8)],
      type: "password",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "Confirme a senha",
      controlName: "passwordConfirm",
      validators: [Validators.required, Validators.minLength(8)],
      type: "password",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "Email",
      controlName: "passwordConfirm",
      validators: [Validators.required],
      type: "email",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "Data de nascimento",
      controlName: "birthdate",
      validators: [Validators.required],
      type: "date",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "Empresa",
      controlName: "company",
      validators: [Validators.required],
      type: "text",
      blurEvent: true,
      value: "",
      inputMak: ""
    },
    {
      label: "CNPJ",
      controlName: "cnpj",
      validators: [Validators.required],
      type: "text",
      blurEvent: true,
      value: "",
      inputMak: "00.000.000/0000-00"
    },
  ]


  constructor() { }


  ngOnInit(): void {
  }

  public getBlurEvent(event: any): void {
    console.log(event)
  }

  public getKeyUpEvent(event: any): void {
    this.form.get(event.controlName)?.setValue(event.value)
    console.log(this.form.value)
  }

}
