import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  private baseURL = "http://img.omdbapi.com?";
  private apiKey = "apiKey=75522b56";

  constructor(private http : HTTP, private httpCLient : HttpClient) { }

  getPoster(id, height) {
    return this.httpCLient.get(this.baseURL+ this.apiKey + "&i=" + id + "&h=" + height)
  }

  getUrl(id, height) {
    return this.baseURL+ this.apiKey + "&i=" + id + "&h=" + height;
  }
}
