import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeDetails=[];
  public employeeDetails1=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeDetails=this._employeeService.getEmployees();
    this._employeeService.getAll().subscribe(data => this.employeeDetails1=data);
  }

}
