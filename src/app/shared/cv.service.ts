import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CvService {

  private url: string = 'https://atomic-code-api.herokuapp.com';

  constructor(private http: HttpClient) {}

  getCV() {
    return this.http.get(this.url + '/cv');
  }
}
