import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  constructor(private readonly http: HttpClient) { }

  public find(plate: string): Observable<any> {
    const request: any = this.http.get(`https://www.visaototalrp.com.br/PedidoVenda/consulta_veiculo_apicarros/${plate}`)
    return request
  }
}
