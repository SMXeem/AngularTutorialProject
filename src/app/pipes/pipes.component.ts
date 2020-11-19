import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name="Sayed";
  public title="Welcome to Angular";
  public person={
    "firstName":"Sayed",
    "lastName":"Al Zawad"
  }
  public date=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
