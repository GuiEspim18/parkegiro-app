import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {


  /** 
   * Class constructor
   */

  constructor() { }


  /** 
   * Method to find a zip code on via cep api
   * @param cep
   * @returns Observable<any>
   */

  public find(cep: string): Observable<any> {
    const findCep = new Observable((res: Subscriber<any>) => {
      const url: string = `https://viacep.com.br/ws/${cep}/json/`;
      const req: XMLHttpRequest = new XMLHttpRequest();
      req.open('get', url, true);
      req.send();
      req.onload = function () {
        const data: any = JSON.parse(this.response);
        res.next(data);
      };
    });
    return findCep;
  }
}
