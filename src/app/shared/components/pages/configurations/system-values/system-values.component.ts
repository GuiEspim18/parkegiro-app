import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-system-values',
  templateUrl: './system-values.component.html',
  styleUrls: ['./system-values.component.scss']
})
export class SystemValuesComponent implements OnInit {

  /* Vars */

  public inputs: Array<any> = [
    {
      label: "30 minutos",
      controlName: "minutes",
      validators: [Validators.required],
      type: "text",
      changeEvent: false,
      blurEvent: false,
      value: "",
      inputMak: ""
    },
    {
      label: "1 minutos",
      controlName: "1hour",
      validators: [Validators.required],
      type: "text",
      changeEvent: false,
      blurEvent: false,
      value: "",
      inputMak: ""
    },
    {
      label: "2 minutos",
      controlName: "2hour",
      validators: [Validators.required],
      type: "text",
      changeEvent: false,
      blurEvent: false,
      value: "",
      inputMak: ""
    },
  ]

  private form: FormGroup = new FormGroup({
    "minutes": new FormControl("", [Validators.required]),
    "1hour": new FormControl("", [Validators.required]),
    "2hour": new FormControl("", [Validators.required]),
  })

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
