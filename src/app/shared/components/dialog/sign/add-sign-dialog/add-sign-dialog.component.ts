import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SignService } from 'src/app/shared/services/sign.service';

@Component({
  selector: 'app-add-sign-dialog',
  templateUrl: './add-sign-dialog.component.html',
  styleUrls: ['./add-sign-dialog.component.scss']
})
export class AddSignDialogComponent implements OnInit {

  /* Vars */

  public readonly form: FormGroup = new FormGroup({
    'sign': new FormControl('', [Validators.required]),
    'brand': new FormControl('', [Validators.required]),
    'model': new FormControl('', [Validators.required]),
    'color': new FormControl('', [Validators.required])
  })

  public loader: boolean = false;

  private vehicle: any;


  constructor(
    private readonly signService: SignService,
    private readonly dialogRef: MatDialogRef<AddSignDialogComponent>
  ) { }


  ngOnInit(): void {
  }


  public submit(form: FormGroup): void {
    if (form.valid) {
      this.dialogRef.close(this.vehicle)
    }
  }


  public findVehicle(event: any): void {
    const sign: string = event.target.value;
    if (sign.length === 8) {
      this.loader = true
      const formatedSign: string = sign.toLocaleUpperCase().replace('-', '');
      this.signService.find(formatedSign).subscribe((value: any) => {
        if (value) {
          this.form.get('brand')?.setValue(value.marca1);
          this.form.get('model')?.setValue(value.modelo1);
          this.form.get('color')?.setValue(value.cor);
          const vehicle: any = {
            sign: formatedSign,
            brand: value.marca1,
            model: value.modelo1,
            color: value.cor
          }
          this.vehicle = vehicle
        }
        this.loader = false;
      }, (err: any) => {
        this.loader = false;
      })
    }
  }

}
