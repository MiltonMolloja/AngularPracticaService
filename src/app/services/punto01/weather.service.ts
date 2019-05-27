import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  public getWeathes(ciudad:string):Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
        'X-RapidAPI-Key': '539f0d819amsh8d00b1ab619d2eap1c0244jsnfffcc4731cab'
      })
    };
    return this._http.get("https://community-open-weather-map.p.rapidapi.com/find?type=link%2C+accurate&units=imperial%2C+metric&q="+ ciudad, httpOptions);
  }
}
