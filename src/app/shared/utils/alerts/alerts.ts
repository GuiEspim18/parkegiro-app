import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from "sweetalert2"
import { systemColors } from '../mocs/system-colors/system-colors.moc';


@Injectable({
  providedIn: 'root'
})
export class Alerts {

  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * Method that displays an error alert on screen
   * @param msg
   * @returns Promise<SweetAlertResult<any>>
   */

  public error(msg: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      text: msg,
      icon: 'error',
      iconColor: systemColors.pages.font,
      toast: true,
      position: 'top',
      showConfirmButton: false,
      confirmButtonColor: systemColors.pages.font,
      timer: 3000,
      timerProgressBar: true
    });
  }


  /** 
   * Method that displays a success alert on screen
   * @param msg
   * @returns Promise<SweetAlertResult<any>>
   */

  public success(msg: string): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      text: msg,
      icon: 'success',
      iconColor: systemColors.pages.font,
      toast: true,
      position: 'top',
      showConfirmButton: false,
      confirmButtonColor: systemColors.pages.font,
      timer: 3000,
      timerProgressBar: true
    });
  }


  /** 
   * Method that displays a quest alert on screen
   * @param msg
   * @returns Promise<SweetAlertResult<any>>
   */

  public question(msg: any): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: msg.title,
      text: msg.message ? msg.message : '',
      icon: 'warning',
      showCancelButton: true,
      iconColor: systemColors.pages.font,
      confirmButtonColor: '#4d8643',
      cancelButtonColor: '#e81010',
      confirmButtonText: msg.confirm,
      cancelButtonText: msg.cancel
    });
  }

}
