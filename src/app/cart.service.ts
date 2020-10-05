import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  itemCount = new Observable(subscriber => {
    subscriber.next(this.items.length);
  });
  constructor() {}

  addItem(item): void {
    this.items.push(item);
  }

  getItems(): any {
    return this.items;
  }

  totalPrice(): any {
    let total = 0;
    const price = 'price';
    for (const item of this.items) {
      total += item[price];
    }
    return total;
  }
}
