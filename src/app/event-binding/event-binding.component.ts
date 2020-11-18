import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public message="";
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event);
    this.message="Sayed";
  }
}
