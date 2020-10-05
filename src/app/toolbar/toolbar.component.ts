import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit, DoCheck {
  constructor(private cart: CartService) {}
  itemNum;
  ngOnInit(): void {}

  ngDoCheck(): void {
    this.cart.itemCount.subscribe(res => (this.itemNum = res));
  }
}
