import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http:HttpClient) { }


  //newsapiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d6ea560322da492ea8b14a7a2ff78365";

  //wallstreetapiUrl
  wallstreetApiUrl = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d6ea560322da492ea8b14a7a2ff78365";

  //topheading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //wallstreet
  wallStreet():Observable<any>
  {
    return this._http.get(this.wallstreetApiUrl);
  }


}
