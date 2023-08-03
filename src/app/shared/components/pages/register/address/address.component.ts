import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from 'src/app/shared/utils/types/input/input.type';
import { inputs } from './address.inputs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  /** 
   * Global properties
   */

  public readonly inputs: Array<Input> = inputs;

  public readonly form: FormGroup = new FormGroup({
    "username": new FormControl("", [Validators.required]),
    "name": new FormControl("", [Validators.required]),
    "surname": new FormControl("", [Validators.required]),
    "cpf": new FormControl("", [Validators.required]),
    "birthdate": new FormControl("", [Validators.required]),
  });

  @Output() private readonly skip: EventEmitter<number> = new EventEmitter();


  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
  }


  
   /** 
   * Method to get keyup event from inputs
   * @param event
   */

   public getKeyUpEvent(event: any): void {
    this.form.get(event.controlName)?.setValue(event.value);
    for (let item of this.inputs) {
      if (item.controlName === event.controlName) item.value = event.value;
    }
  }


  /** 
   * Method to get the change value event from inputs
   * @param event
   */

  public getChangeEvent(event: any): void {
    this.form.get(event.controlName)?.setValue(event.value);
  }


  /** 
  * Method to get the blur event from inputs
  * @param event
  */

  public getBlurEvent(event: any): void {
    if (event.controlName === "birthdate") this.form.get(event.controlName)?.setValue(event.value);
  }

}
