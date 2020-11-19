import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string="/assets/Data/employees1.json"
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
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message|| "Server Error");
  }
}
