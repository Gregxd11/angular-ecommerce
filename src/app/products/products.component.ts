import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

// add functionality to product photo

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(
    private productsService: ProductsService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  addItem(item): any {
    this.cart.addItem(item);
  }
}
