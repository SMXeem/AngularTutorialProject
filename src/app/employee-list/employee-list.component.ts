import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList=[];
  public employeeList1=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeList=this._employeeService.getEmployees();
    this._employeeService.getAll().subscribe(data => this.employeeList1=data);
  }

}
