import { Component, OnInit, Input } from '@angular/core';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-mob',
  templateUrl: './mob.component.html',
  styleUrls: ['./mob.component.css'],
  providers: []
})
export class MobComponent implements OnInit {

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
  }

 mobprice = this.firstService.getPrice();
 addToCart() {
  this.firstService.setPrice(19);
  this.mobprice = this.firstService.getPrice();
 }
 
}
