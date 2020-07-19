import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  price = 10;

  getPrice() {
    return this.price;
  }

  setPrice(pr) {
    this.price = pr;
  }
}
