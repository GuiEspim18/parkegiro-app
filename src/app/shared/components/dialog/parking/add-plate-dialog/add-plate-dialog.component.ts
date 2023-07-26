import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PlateService } from 'src/app/shared/services/plate.service';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { inputs } from './add-plate.inputs';

@Component({
  selector: 'app-add-plate-dialog',
  templateUrl: './add-plate-dialog.component.html',
  styleUrls: ['./add-plate-dialog.component.scss']
})
export class AddPlateDialogComponent implements OnInit {

  /** 
   * Global properties
   */

  public readonly form: FormGroup = new FormGroup({
    'plate': new FormControl('', [Validators.required]),
    'brand': new FormControl('', [Validators.required]),
    'model': new FormControl('', [Validators.required]),
    'color': new FormControl('', [Validators.required])
  });

  public inputs: Array<any> = inputs;

  public loader: boolean = false;


  /** 
   * Class constructor
   */

  constructor(
    private readonly plateService: PlateService,
    private readonly dialogRef: MatDialogRef<AddPlateDialogComponent>,
    private readonly alerts: Alerts
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
  }


  /** 
   * Method to submit the form and add a plate on database
   * @param form
   */

  public submit(form: FormGroup): void {
    if (form.valid) {
      const currentDate: Date = new Date();
      form.value.entrance = `${currentDate.getHours()}:${Number(currentDate.getMinutes()) < 10 ? String("0" + currentDate.getMinutes()) : currentDate.getMinutes()}`;
      form.value.departure = null;
      this.plateService.create(form.value).subscribe((element: Object) => {
        this.dialogRef.close(element);
      }, (err: HttpErrorResponse) => {
        this.alerts.error(err.error.message);
        this.resetInputs();
      });
    } else {
      const msg: string = "Preencha os campos que são obrigatórios!";
      this.alerts.error(msg);
    }
  }


  /** 
   * Method to find a vehicle on external api
   * @param value
   */

  private findVehicle(value: any): void {
    const plate: string = value;
    if (plate.length === 8) {
      this.loader = true
      const formatedPlate: string = plate.toLocaleUpperCase().replace('-', '');
      this.plateService.find(formatedPlate).subscribe((value: any) => {
        if (value) {
          this.form.get('brand')?.setValue(value.marca1);
          this.form.get('model')?.setValue(value.modelo1);
          this.form.get('color')?.setValue(value.cor);
          this.inputs[1].value = value.marca1;
          this.inputs[2].value = value.modelo1;
          this.inputs[3].value = value.cor;
        }
        this.loader = false;
      }, (err: any) => {
        this.loader = false;
        const msg: string = "Placa inválida!";
        this.alerts.error(msg);
        this.resetInputs();
      })
    }
  }


  /** 
   * Method to get blur event from inputs
   * @param event
   */

  public getBlurEvent(event: any): void {
    if (event.controlName === "plate") this.findVehicle(event.value);
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
   * Method to reset inputs
   */

  private resetInputs(): void {
    this.form.reset();
    for (let item of this.inputs) {
      item.value = "";
    }
  }
}
