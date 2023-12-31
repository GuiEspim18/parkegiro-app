import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * Method to return the api url
   * @param data Array<string>
   * @returns string
   */

  public url(data: Array<string>): string {
    let url: string = environment.apiUrl;
    for (let item of data) {
      url+= `/${item}`
    }
    return url
  }

}
