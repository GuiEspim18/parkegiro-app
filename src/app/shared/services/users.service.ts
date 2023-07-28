import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from './api-url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /** 
   * Class constructor
   */

  constructor(
    private readonly http: HttpClient,
    private readonly apiUrlService: ApiUrlService
  ) { }


   /** 
   * Method to create an user on database
   * @param data
   * @returns Observable<Object>
   */

   public create(data: any): Observable<Object> {
    const path: Array<any> = ['users'];
    return this.http.post(this.apiUrlService.url(path), data);
  }


  /** 
   * Method to get all users on database
   * @returns Observable<Object>
   */

  public getAll(): Observable<any> {
    const path: Array<any> = ['users'];
    return this.http.get(this.apiUrlService.url(path))
  }


  /** 
   * Method to update an user on database
   * @param id
   * @param data
   * @returns Observable<Object>
   */

  public update(id: number, data: any): Observable<Object & Object> {
    const path: Array<any> = ['users', id];
    return this.http.patch(this.apiUrlService.url(path), data);
  }


  /** 
   * Method to delete an user on database
   * @param id
   * @returns Observable<Object> 
   */

  public delete(id: number): Observable<Object> {
    const path: Array<any> = ['users', id];
    return this.http.delete(this.apiUrlService.url(path));
  } 


  /** 
   * Method to find an user photo on database
   * @param name
   * @returns Observable<Object> 
   */

  public getUserPhoto(name: string): string {
    const path: Array<any> = ['photo', 'download', name];
    return this.apiUrlService.url(path);
  }
  
}
