import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from 'src/app/shared/utils/types/input/input.type';
import { inputs } from './validation.inputs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  /** 
   * Global properties
   */

  public readonly inputs: Array<Input> = inputs;

  public readonly form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    emailConfirm: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    passwordConfirm: new FormControl("", [Validators.required]),
  });

  @Output() private readonly skip: EventEmitter<number> = new EventEmitter();

  private readonly value: number = 25;


  /** 
   * Class constructors
   */

  constructor(
    private readonly saveDataService: SaveDataService,
    private readonly alerts: Alerts
  ) { }


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
   * Method to go back to last stage
   */

  public back(): void {
    const value: any = {
      stage: 1, 
      value: 75
    };
    this.skip.emit(value);
  }


  /** 
   * Method to submit the form
   */

  public submit(form: FormGroup): void {
    if (form.valid) {
      this.saveDataService.save("validation", form.value);
      const skipObj: any = {
        stage: 4,
        value: this.value * 4
      };
      this.skip.emit(skipObj);
    } else {
      const message: string = "Preencha todos os campos obrigatórios!";
      this.alerts.error(message);
    }
  }


}
