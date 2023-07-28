import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { inputs } from './add-users.inputs';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { CepService } from 'src/app/shared/services/cep.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-users-dialog',
  templateUrl: './add-users-dialog.component.html',
  styleUrls: ['./add-users-dialog.component.scss']
})
export class AddUsersDialogComponent implements OnInit {

  /** 
   * Global properties
   */

  public loader: boolean = false;

  public readonly form: FormGroup = new FormGroup({
    "username": new FormControl('', [Validators.required]),
    "name": new FormControl('', [Validators.required]),
    "surname": new FormControl('', [Validators.required]),
    "cpf": new FormControl('', [Validators.required]),
    "birthdate": new FormControl('', [Validators.required]),
    "zipCode": new FormControl('', [Validators.required]),
    "state": new FormControl('', [Validators.required]),
    "street": new FormControl('', [Validators.required]),
    "city": new FormControl('', [Validators.required]),
    "number": new FormControl('', [Validators.required]),
    "compliment": new FormControl(''),
    "cellphone": new FormControl('', [Validators.required]),
    "telephone": new FormControl(''),
    "email": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required]),
    "passwordConfirm": new FormControl('', [Validators.required]),
    "photo": new FormControl(null),
    "lastAccess": new FormControl(null)
  });

  public inputs: Array<any> = inputs;

  public username: string = this.form.get('username')?.value;

  public backGroundImage: string = "";

  public userPhoto: File;


  /** 
   * Contructor
   */

  constructor(
    private readonly alerts: Alerts,
    private readonly photoService: PhotoService,
    private readonly userService: UsersService,
    private readonly cepService: CepService,
    private readonly dialogRef: MatDialogRef<AddUsersDialogComponent>
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
      if (form.value.password === form.value.passwordConfirm) {
        this.loader = true;
        this.userService.create(form.value).subscribe((element: any) => {
          if (this.userPhoto) {
            let userPhoto: any = this.userPhoto;
            userPhoto.user = element.id;
            this.photoService.create(userPhoto).subscribe(() => {
              const message: string = "Usuário adicionado com sucesso!";
              this.alerts.success(message);
              this.dialogRef.close();
              this.loader = false;
            });
          }
        }, (err: HttpErrorResponse) => {
          this.alerts.error(err.error.message);
          this.loader = false;
        });
      } else {
        const message: string = "A repetição da senha e a senha precisam ser iguais!";
        this.alerts.error(message);
      }
    } else {
      const message: string = "Preencha todos os campos obrigatórios!";
      this.alerts.error(message);
    }

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
    if (event.controlName === 'username') this.username = event.value;
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
    switch (event.controlName) {
      case "birthdate": this.form.get(event.controlName)?.setValue(event.value); break;
      case "zipCode": this.findCep(event.value); break;
    }
  }


  /** 
   * Method to find a cep on via cep api and populate all the fields
   * @param cep
   */

  public findCep(cep: string): void {
    if (cep.length > 0) {
      this.loader = true;
      this.cepService.find(cep).subscribe((element: any) => {
        this.form.get('street')?.setValue(element.logradouro);
        this.form.get('state')?.setValue(element.uf);
        this.form.get('city')?.setValue(element.localidade);
        this.inputs.forEach((street: any) => {
          switch (street.controlName) {
            case "street": street.value = element.logradouro; break;
            case "state": street.value = element.uf; break;
            case "city": street.value = element.localidade; break;
          }
        })
        this.loader = false;
      })
    }
  }


  /** 
  * Method to upload a photo file on typescript
  * @param image
  */

  public upload(image: any): void {
    const reader: FileReader = new FileReader();
    const files: Array<File> = image.target.files;
    reader.onloadend = async () => {
      this.backGroundImage = reader.result as string;
    };
    if (files[0]) {
      reader.readAsDataURL(files[0]);
      this.userPhoto = files[0];
    }
  }

}
