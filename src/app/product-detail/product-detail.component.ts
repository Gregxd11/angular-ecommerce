import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: [ './product-detail.component.scss' ]
})
export class ProductDetailComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private productsServ: ProductsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productsServ
        .getProduct(+params.get('id'))
        .subscribe(res => (this.product = res));
    });
  }
}
