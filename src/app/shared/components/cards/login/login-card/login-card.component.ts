import { Component, OnInit } from '@angular/core';
import { inputs } from './login-card.inputs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Alerts } from 'src/app/shared/utils/alerts/alerts';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {

  /** 
   * Global properties
   */

  public inputs: Array<any> = inputs;

  public readonly form: FormGroup = new FormGroup({
    "email": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required])
  });


  /** 
   * Class constructor
   */

  constructor(
    private readonly alerts: Alerts,
    private readonly userService: UsersService,
    private readonly authService: AuthService
  ) { }


  /** 
   * On init method
   */

  public ngOnInit(): void {
    this.authService.token();
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
   * Method to submit the form   
   */

  public submit(form: FormGroup): void {
    if (form.valid) {
      this.userService.login(form.value)
    } else {
      const message: string = "Preencha os campos obrigatórios!";
      this.alerts.error(message);
    }
  }

}
