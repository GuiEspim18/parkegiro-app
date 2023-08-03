import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from 'src/app/shared/utils/types/input/input.type';
import { inputs } from './about-you.inputs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValueService } from 'src/app/shared/services/value.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { PartialObserver } from 'rxjs';
import { AboutYou } from 'src/app/shared/utils/types/about-you/about-you';

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.scss']
})
export class AboutYouComponent implements OnInit {

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
  
  @Output() private readonly skip: EventEmitter<any> = new EventEmitter();

  private readonly value: number = 25;


  /** 
   * Class constructor
   */

  constructor(
    private readonly valueService: ValueService,
    private readonly alerts: Alerts,
    private readonly saveDataService: SaveDataService
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.sendValue();
    this.populate();
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


  /** 
   * Method to emit send value of page
   */

  private sendValue(): void {
    this.valueService.updateValue(this.value);
  }


  /** 
   * Method to submit the form
   * @param form
   */

  public submit(form: FormGroup): void {
    if (form.valid) {
      this.saveDataService.saveAboutYou(form.value);
      const skipObj: any = {
        stage: 1,
        value: this.value * 2
      };
      this.skip.emit(skipObj);
    } else {
      const message: string = "Preencha todos os campos obrigatórios!";
      this.alerts.error(message);
    }
  }


  /** 
   * Method to populate de form
   */

  private populate(): void {
    this.saveDataService.aboutYou.subscribe((element: any) => {
      const controls: { [key: string]: AbstractControl; } = this.form.controls;
      for (let item in element) if (element[item] || element[item]?.length > 0) controls[item] = element[item];
    });
  }

}
