import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlService } from './api-url.service';
import { AuthService } from './auth.service';
import { Token } from '../utils/types/token/token.types';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  /** 
   * Global constructor
   */

  private readonly token: Token = this.authService.token();


  /** 
   * Class constructor
   */

  constructor(
    private readonly http: HttpClient,
    private readonly apiUrlService: ApiUrlService,
    private readonly authService: AuthService
  ) { }


  /** 
   * Method to find a palte on visaototalrp api
   * @param plate
   * @returns Observable<any>
   */

  public find(plate: string): Observable<Object> {
    const request: Observable<Object> = this.http.get(`https://www.visaototalrp.com.br/PedidoVenda/consulta_veiculo_apicarros/${plate}`);
    return request;
  }


  /** 
   * Method to find all palte by stage on database
   * @param num
   * @returns Observable<any>
   */

  public findByStage(num: number): Observable<any> {
    const path: Array<any> = ['plates', 'stage', num];
    return this.http.get(this.apiUrlService.url(path), this.token);
  }


  /** 
   * Method to create a plate on database
   * @param data
   * @returns Observable<Object>
   */

  public create(data: any): Observable<Object> {
    const path: Array<any> = ['plates'];
    return this.http.post(this.apiUrlService.url(path), data, this.token);
  }


  /** 
   * Method to get all plate on database
   * @returns Observable<Object>
   */

  public getAll(): Observable<any> {
    const path: Array<any> = ['plates'];
    return this.http.get(this.apiUrlService.url(path), this.token)
  }


  /** 
   * Method to update a plate on database
   * @param id
   * @param data
   * @returns Observable<Object>
   */

  public update(id: number, data: any): Observable<Object & Object> {
    const path: Array<any> = ['plates', id];
    return this.http.patch(this.apiUrlService.url(path), data, this.token);
  }


  /** 
   * Method to delete a plate on database
   * @param id
   * @returns Observable<Object> 
   */

  public delete(id: number): Observable<Object> {
    const path: Array<any> = ['plates', id];
    return this.http.delete(this.apiUrlService.url(path),this.token);
  } 

}
