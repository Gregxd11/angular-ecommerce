import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products;
  constructor(private http: HttpClient) {}

  getProducts(): any {
    this.products = this.http.get('https://fakestoreapi.com/products');
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProduct(id: number): any {
    const prodId = id + 1;
    return this.http.get(`https://fakestoreapi.com/products/${prodId}`);
  }
}
