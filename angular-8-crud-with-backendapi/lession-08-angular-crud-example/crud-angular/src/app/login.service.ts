import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    var data = {
      'email': email,
      'password': password
    };
    return this.http.post(environment.apiUrl + '/login', data, { headers: reqHeader, responseType: 'json' });
  }

  /*
  auth_token!: Observable<string>;
  private token = new BehaviorSubject('default message');
  currentMessage = this.token.asObservable();
  */

}
