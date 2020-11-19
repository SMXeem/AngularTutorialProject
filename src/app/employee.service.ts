import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/Data/employees.json"
  constructor(private http:HttpClient) { }
  getEmployees(){
    return [
      {"id":1, "name": "Sayed", "age":24},
      {"id":2, "name": "Tariful", "age":23},
      {"id":3, "name": "Sun", "age":25},
      {"id":4, "name": "Marzan", "age":22}
    ]
  }
  getAll(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
