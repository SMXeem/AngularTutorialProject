import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public success="success";
  public isError=false;
  public isSpecial=false;
  public messageClass={
    "success": !this.isError,
    "danger": this.isError,
    "special": this.isSpecial
  };
  constructor() { }

  ngOnInit(): void {
  }

}
