import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from 'src/app/shared/utils/types/input/input.type';
import { inputs } from './address.inputs';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ValueService } from 'src/app/shared/services/value.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { SaveDataService } from 'src/app/shared/services/save-data.service';
import { CepService } from 'src/app/shared/services/cep.service';

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
    "zipCode": new FormControl("", [Validators.required]),
    "street": new FormControl("", [Validators.required]),
    "state": new FormControl("", [Validators.required]),
    "city": new FormControl("", [Validators.required]),
    "number": new FormControl("", [Validators.required]),
    "compliment": new FormControl(""),
  });

  @Output() private readonly skip: EventEmitter<number> = new EventEmitter();

  private readonly value: number = 25;

  public loader: boolean = false;


  /** 
   * Class constructor
   */

  constructor(
    private readonly valueService: ValueService,
    private readonly alerts: Alerts,
    private readonly saveDataService: SaveDataService,
    private readonly cepService: CepService
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
    for (let item of this.inputs) if (item.controlName === event.controlName) item.value = event.value;
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
    if (event.controlName === "zipCode") this.findCep(event.value);;
  }

  /** 
   * Method to populate de form
   */

  private populate(): void {
    this.saveDataService.data.subscribe((element: any) => {
      const controls: { [key: string]: AbstractControl; } = this.form.controls;
      for (let item in element) if (controls[item]) controls[item]?.patchValue(element[item]);
    });
  }


  /** 
   * Method to go back to last stage
   */

  public back(): void {
    const value: any = {
      stage: 0,
      value: 25
    };
    this.skip.emit(value);
  }


  /** 
   * Method to submit the form
   * @param form
   */

  public submit(form: FormGroup): void {
    if (form.valid) {
      this.saveDataService.save(form.value);
      const skipObj: any = {
        stage: 2,
        value: this.value * 3
      };
      this.skip.emit(skipObj);
    } else {
      const message: string = "Preencha todos os campos obrigatórios!";
      this.alerts.error(message);
    }
  }


  /** 
   * Method to find a cep on via cep api and populate all the fields
   * @param cep
   */

  public findCep(cep: string): void {
    if (cep.length > 0) {
      this.loader = true;
      const fields: Array<{name: string, field: string}> = [{ name: 'street', field: 'logradouro' }, { name: 'state', field: 'uf' }, { name: 'city', field: 'localidade' }];
      this.cepService.find(cep).subscribe((element: any) => {
        for (let item of fields) {
          this.form.get(item.name)?.setValue(element[item.field]);
          this.inputs.forEach((input: Input) => {
            if (input.controlName === item.name) input.value = element[item.field];
          });
        }
        this.loader = false;
      })
    }
  }

}
