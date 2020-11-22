import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { IDepartment } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _url:string="/assets/Data/department.json"

  constructor(private http:HttpClient) { }

  getAll():Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message|| "Server Error");
  }
}
