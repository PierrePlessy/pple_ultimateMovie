import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private baseURL = "http://www.omdbapi.com?";
  private apiKey = "apiKey=75522b56";

  constructor(private http : HTTP, private httpCLient : HttpClient) { }

  search(term) {
    return this.httpCLient.get(this.baseURL+ this.apiKey + "&s=" + term)
  }
}