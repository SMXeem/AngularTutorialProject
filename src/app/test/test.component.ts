import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public Name="Sayed";
  public Age=24;
  public SiteURL=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  getName(){
    return "Hello "+ this.Name;
  }

}
