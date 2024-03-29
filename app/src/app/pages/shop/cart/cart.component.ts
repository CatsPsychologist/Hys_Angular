import { Component, OnInit } from '@angular/core';
import {CartService} from "../shared/services/cart.service";
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
   public products:Products[] = products;
   items : Products[];
   total$: Observable<number>;

  constructor(
    private cartService : CartService,

  ) {}
  ngOnInit(){
    this.items = this.cartService.getItems();
    this.total$ = this.cartService.getTotal(this.items);
  }

  clearCartItem(product: Products){
    this.items = this.cartService.clearCartItem(product);
    product.isChosen = false;
  }
  cartCounter(product: Products, num : number){
    product.amount = product.amount + num;
    if(product.amount === 0) return this.clearCartItem(product);

    return this.cartService.cartCounter();
  }

}
