import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {TokenStorageService} from "./token-storage.service";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=98875111208701b956a9e50ee6b5d2e0';
  // private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/employees';
  authToken!: any;
  reqHeader!: any;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.authToken = tokenStorage.getToken();
    console.log(this.authToken);
    this.reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      // cu phap co dau cach dang sau Bearer
      'Authorization': 'Bearer ' + this.authToken
    });
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + `/customers/${id}`);
  }

  createEmployee(employee: object): Observable<object> {
    console.log(this.reqHeader);
    console.log(employee);
    return this.http.post(environment.apiUrl + '/customers', employee, { headers: this.reqHeader });
  }

  updateEmployee(id: number, value: any): Observable<object> {
    return this.http.put(environment.apiUrl + `/customers/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + `/customers/${id}`, { headers: this.reqHeader });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(environment.apiUrl + '/customers');
  }

  getEmployeesByName(name: string): Observable<any> {
    return this.http.post(environment.apiUrl + `/customers/search/`, name);
  }
}
