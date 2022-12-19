import { Component, OnInit } from '@angular/core';
import {CartService} from "../shared/services/cart.service";
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
   public products:Products[] = products;
   items : any ;

  constructor(
    private cartService : CartService,

  ) {}
  ngOnInit(){
    this.items = this.cartService.getItems();
  }

  clearCartItem(id : number){

    this.items = this.cartService.clearCartItem(id);
    products[id - 1].isChosen = false;
  }

}
