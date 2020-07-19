import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() name;
  
  @Output() increment = new EventEmitter();

  ngOnInit(): void {
  }
  num = 0;
  inc() {
    this.num++;
    this.increment.emit(this.num);
  }
}
