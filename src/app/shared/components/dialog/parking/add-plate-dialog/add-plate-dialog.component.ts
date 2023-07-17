import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PlateService } from 'src/app/shared/services/plate.service';

@Component({
  selector: 'app-add-plate-dialog',
  templateUrl: './add-plate-dialog.component.html',
  styleUrls: ['./add-plate-dialog.component.scss']
})
export class AddPlateDialogComponent implements OnInit {

  /* Vars */

  public readonly form: FormGroup = new FormGroup({
    'plate': new FormControl('', [Validators.required]),
    'brand': new FormControl('', [Validators.required]),
    'model': new FormControl('', [Validators.required]),
    'color': new FormControl('', [Validators.required])
  })

  public inputs: Array<any> = [
    {
      label: "Placa",
      controlName: "plate",
      validators: [Validators.required],
      type: "text",
      changeEvent: false,
      blurEvent: true,
      value: "",
      inputMak: "SSS-0A00"
    },
    {
      label: "Marca",
      controlName: "brand",
      validators: [Validators.required],
      type: "text",
      changeEvent: false,
      blurEvent: false,
      value: "",
      inputMak: ""
    },
    {
      label: "Modelo",
      controlName: "model",
      validators: [Validators.required],
      type: "text",
      changeEvent: false,
      blurEvent: false,
      value: "",
      inputMak: ""
    },
    {
      label: "Cor",
      controlName: "color",
      validators: [Validators.required],
      type: "text",
      changeEvent: false,
      blurEvent: false,
      value: "",
      inputMak: ""
    },
  ]

  public loader: boolean = false;


  constructor(
    private readonly plateService: PlateService,
    private readonly dialogRef: MatDialogRef<AddPlateDialogComponent>,
  ) { }


  ngOnInit(): void {
  }


  public submit(form: FormGroup): void {
    if (form.valid) {
      const currentDate: Date = new Date();
      form.value.entrance = `${currentDate.getHours()}:${Number(currentDate.getMinutes()) < 10 ? String("0" + currentDate.getMinutes()) : currentDate.getMinutes()}`;
      form.value.departure = null;
      this.plateService.create(form.value).subscribe((element) => {
        this.dialogRef.close();
      });
    }
  }


  public findVehicle(value: any): void {
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
          const vehicle: any = {
            plate: formatedPlate,
            brand: value.marca1,
            model: value.modelo1,
            color: value.cor
          }
        }
        this.loader = false;
      }, (err: any) => {
        this.loader = false;
      })
    }
  }


  public getBlurEvent(event: any): void {
    if (event.controlName === "plate") this.findVehicle(event.value);
  }

  public getKeyUpEvent(event: any): void {
    this.form.get(event.controlName)?.setValue(event.value)
  }

  public getChangeEvent(event: any): void {
    this.form.get(event.controlName)?.setValue(event.value)
  }

}
