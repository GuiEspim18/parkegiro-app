import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlService } from './api-url.service';
import { AuthService } from './auth.service';
import { Token } from '../utils/types/token/token.types';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  /** 
   * Global properties
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
   * Method to create a photo on database
   * @param data
   * @returns Observable<Object>
   */

  public create(data: any): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('file', data, data.name);
    const path: Array<any> = ['photo', data.user];
    return this.http.post(this.apiUrlService.url(path), formData, this.token);
  }


  /** 
   * Method to get all photo on database
   * @returns Observable<Object>
   */

  public getAll(): Observable<any> {
    const path: Array<any> = ['photo'];
    return this.http.get(this.apiUrlService.url(path), this.token)
  }


  /** 
   * Method to update a photo on database
   * @param id
   * @param data
   * @returns Observable<Object>
   */

  public update(id: number, data: any): Observable<Object & Object> {
    const path: Array<any> = ['photo', id];
    return this.http.patch(this.apiUrlService.url(path), data, this.token);
  }


  /** 
   * Method to delete a photo on database
   * @param id
   * @returns Observable<Object> 
   */

  public delete(id: number): Observable<Object> {
    const path: Array<any> = ['photo', id];
    return this.http.delete(this.apiUrlService.url(path), this.token);
  }
}
