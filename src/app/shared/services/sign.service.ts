import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(private readonly http: HttpClient) { }

  public find(sign: string): Observable<any> {
    const request: any = this.http.get(`https://www.visaototalrp.com.br/PedidoVenda/consulta_veiculo_apicarros/${sign}`)
    return request
  }
}
