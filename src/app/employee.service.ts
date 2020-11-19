import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployees(){
    return [
      {"id":1, "name": "Sayed", "age":24},
      {"id":2, "name": "Tariful", "age":23},
      {"id":3, "name": "Sun", "age":25},
      {"id":4, "name": "Marzan", "age":22}
    ]
  }
}
