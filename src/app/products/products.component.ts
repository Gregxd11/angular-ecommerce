import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit {
  products = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getRandomProducts().subscribe(res => {
      this.products = res;
      console.log(this.products);
    });
  }
}
