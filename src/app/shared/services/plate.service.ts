import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  constructor(
    private readonly http: HttpClient,
    private readonly apiUrlService: ApiUrlService
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
    return this.http.get(this.apiUrlService.url(path));
  }


  /** 
   * Method to create a plate on database
   * @param data
   * @returns Observable<Object>
   */

  public create(data: any): Observable<Object> {
    const path: Array<any> = ['plates'];
    return this.http.post(this.apiUrlService.url(path), data);
  }


  /** 
   * Method to get all plate on database
   * @returns Observable<Object>
   */

  public getAll(): Observable<any> {
    const path: Array<any> = ['plates'];
    return this.http.get(this.apiUrlService.url(path))
  }


  /** 
   * Method to create a plate on database
   * @param id
   * @param data
   * @returns Observable<Object>
   */

  public update(id: number, data: any): Observable<Object & Object> {
    const path: Array<any> = ['plates', id];
    return this.http.patch(this.apiUrlService.url(path), data);
  }


  /** 
   * Method to delete a plate on database
   * @param id
   * @returns Observable<Object> 
   */

  public delete(id: number): Observable<Object> {
    const path: Array<any> = ['plates', id];
    return this.http.delete(this.apiUrlService.url(path));
  } 

}
