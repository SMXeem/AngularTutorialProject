import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-depertment',
  templateUrl: './depertment.component.html',
  styleUrls: ['./depertment.component.css']
})
export class DepertmentComponent implements OnInit {
  public departmentList=[];
  public errorMessage;

  constructor(private _departmentService:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this._departmentService.getAll().subscribe(data => this.departmentList=data,
      error => this.errorMessage=error
      );
  }
  onSelect(department){
    this.router.navigate(['/depertments',department.id])
  }

}
