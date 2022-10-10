import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private url: string = 'https://atomic-code-api.herokuapp.com';

  constructor(private http: HttpClient) {}

  sendMail(text: String) {
    console.log(text);
    return this.http.post(this.url + '/sendmail', { text: text });
  }

  test() {
    return this.http.get(this.url);
  }
}
