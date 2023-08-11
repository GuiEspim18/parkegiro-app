import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from './api-url.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Token } from '../utils/types/token/token.types';
import { Alerts } from '../utils/alerts/alerts';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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
    private readonly authService: AuthService,
    private readonly alerts: Alerts,
    private readonly router: Router
  ) { }


   /** 
   * Method to create an user on database
   * @param data
   * @returns Observable<Object>
   */

   public create(data: any): Observable<Object> {
    const path: Array<any> = ['users'];
    return this.http.post(this.apiUrlService.url(path), data, this.token);
  }


  /** 
   * Method to get all users on database
   * @returns Observable<Object>
   */

  public getAll(): Observable<any> {
    const path: Array<any> = ['users'];
    return this.http.get(this.apiUrlService.url(path), this.token)
  }


  /** 
   * Method to update an user on database
   * @param id
   * @param data
   * @returns Observable<Object>
   */

  public update(id: number, data: any): Observable<Object & Object> {
    const path: Array<any> = ['users', id];
    return this.http.patch(this.apiUrlService.url(path), data, this.token);
  }


  /** 
   * Method to delete an user on database
   * @param id
   * @returns Observable<Object> 
   */

  public delete(id: number): Observable<Object> {
    const path: Array<any> = ['users', id];
    return this.http.delete(this.apiUrlService.url(path), this.token);
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


  /** 
   * Method to execute the login on api
   * @param data
   * @returns Observable<Object>
   */

  public login(data: any, type: number): void {
    const path: Array<any> = ['auth', 'login', type];
    delete data.typeLogin;
    this.http.patch(this.apiUrlService.url(path), data).subscribe((element: any) => {
      this.authService.save(element);
      let message : string;
      if (element.user) message = `Olá, ${element.user.username}!`
      else message = `Olá, ${element.admin.username}!`
      this.alerts.success(message);
      window.location.href = "/home";
    }, (err: HttpErrorResponse) => {
      const message: string = err.error.message;
      this.alerts.error(message);
    });
  }
  
}
