import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inputs } from './profile.inputs';
import { AuthService } from 'src/app/shared/services/auth.service';

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

  public inputs: Array<any> = inputs;


  constructor(private readonly authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.verify();
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
