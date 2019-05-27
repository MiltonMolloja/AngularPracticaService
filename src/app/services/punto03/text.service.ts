import { Injectable } from '@angular/core';

// Importamos los componentes que vamos a usar
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextService {

  constructor(private _http: HttpClient) { }

  public getTexts(org: string, des:string, text:string):Observable<any>{
    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'systran-systran-platform-for-language-processing-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '539f0d819amsh8d00b1ab619d2eap1c0244jsnfffcc4731cab'
      })
    };
    return this._http.get("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source="+org+"&target="+des+"&input="+text, httpOptions);
  }

}
