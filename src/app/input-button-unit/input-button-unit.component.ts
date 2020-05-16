import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template:`
  <p>
    input-button-unit works!
    The title is {{title}}
  
  </p>`,
  //templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  constructor() { }

  title = "Hello World";


  ngOnInit() {
  }

}