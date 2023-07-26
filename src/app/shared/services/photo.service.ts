import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlService } from './api-url.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  /** 
   * Class constructor
   */

  constructor(
    private readonly http: HttpClient,
    private readonly apiUrlService: ApiUrlService
  ) { }


  /** 
   * Method to create a photo on database
   * @param data
   * @returns Observable<Object>
   */

  public create(data: any): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('file', data, data.name);
    const path: Array<any> = ['photo'];
    return this.http.post(this.apiUrlService.url(path), formData);
  }


  /** 
   * Method to get all photo on database
   * @returns Observable<Object>
   */

  public getAll(): Observable<any> {
    const path: Array<any> = ['photo'];
    return this.http.get(this.apiUrlService.url(path))
  }


  /** 
   * Method to update a photo on database
   * @param id
   * @param data
   * @returns Observable<Object>
   */

  public update(id: number, data: any): Observable<Object & Object> {
    const path: Array<any> = ['photo', id];
    return this.http.patch(this.apiUrlService.url(path), data);
  }


  /** 
   * Method to delete a photo on database
   * @param id
   * @returns Observable<Object> 
   */

  public delete(id: number): Observable<Object> {
    const path: Array<any> = ['photo', id];
    return this.http.delete(this.apiUrlService.url(path));
  }
}
