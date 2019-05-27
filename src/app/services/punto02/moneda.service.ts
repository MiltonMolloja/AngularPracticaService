import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor(private _http: HttpClient) { }

  public getValoresDeCambio():Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this._http.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
  }
}
