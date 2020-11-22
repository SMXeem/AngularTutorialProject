import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-depertment',
  templateUrl: './depertment.component.html',
  styleUrls: ['./depertment.component.css']
})
export class DepertmentComponent implements OnInit {
  public departmentList=[];
  public errorMessage;

  constructor(private _departmentService:DepartmentService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this._departmentService.getAll().subscribe(data => this.departmentList=data,
      error => this.errorMessage=error
      );
  }
  onSelect(department){
    //this.router.navigate(['/depertments',department.id]);
    this.router.navigate([department.id],{relativeTo:this.route});
  }

}
