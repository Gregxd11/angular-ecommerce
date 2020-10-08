import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.scss' ]
})
export class CartComponent implements OnInit {
  items;
  totalPrice;
  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.items = this.cart.getItems();
    this.totalPrice = this.cart.totalPrice();
  }

  checkout(): void {
    alert('You paid and checked out!');
  }
}
