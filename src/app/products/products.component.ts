import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

// add functionality to product photo

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }
}
