import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from 'src/app/shared/utils/types/input/input.type';
import { inputs } from './company.inputs';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  /** 
   * Global properties
   */

  public inputs: Array<Input> = inputs;

  public readonly form: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    cnpj: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required])
  });

  @Output() private readonly skip: EventEmitter<number> = new EventEmitter();

  private readonly value: number = 25;


  /**
   * Class constructor
   */

  constructor(
    private readonly saveDataService: SaveDataService,
    private readonly alerts: Alerts
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
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
   * Method to go back to last stage
   */

  public back(): void {
    const value: any = {
      stage: 1, 
      value: 50
    };
    this.skip.emit(value);
  }


  /** 
   * Method to submit the form
   */

  public submit(form: FormGroup): void {
    if (form.valid) {
      this.saveDataService.save(form.value, true);
      const skipObj: any = {
        stage: 3,
        value: this.value * 3.5
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
    this.saveDataService.data.subscribe((element: any) => {
      const controls: { [key: string]: AbstractControl; } = this.form.controls;
      for (let item in element.company) if (controls[item]) controls[item]?.patchValue(element.company[item]);
    });
  }

}
