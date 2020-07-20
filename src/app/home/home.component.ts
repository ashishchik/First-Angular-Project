import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

 number;
  myName = 'Rohit';
  ngOnInit(): void {
  }
  incr(num) {
    console.log('num', num);
    this.number = num;
  }

}
