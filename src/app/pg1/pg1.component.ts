import { Component, OnInit } from '@angular/core';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.component.html',
  styleUrls: ['./pg1.component.css'],
  providers: []
})
export class Pg1Component implements OnInit {

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
  }
  price = this.firstService.getPrice();

}
