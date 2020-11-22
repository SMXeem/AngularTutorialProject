import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  public departmentId;
  ngOnInit(){
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentId=id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
  }
  previous(){
    let previousId=this.departmentId-1;
    this.router.navigate(['/depertments',previousId]);
  }
  next(){
    let previousId=this.departmentId+1;
    this.router.navigate(['/depertments',previousId]);
  }
  gotoDepartment(){
    let selectedId=this.departmentId ? this.departmentId:null;
    this.router.navigate(['depertments',{id:selectedId}])
  }
}
