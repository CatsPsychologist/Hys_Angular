import { Component } from '@angular/core';
import {CartService} from "../shared/services/cart.service";
import {Products} from "../../../shared/models/products.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  items = this.service.getItems();

  constructor(
    private service : CartService,

  ) {}

  clearCartItem(){
    console.log('clear')
    this.service.clearCartItem();
  }

}
