import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Products} from "../../../../shared/models/products.interface";
import {products} from "../../../../shared/mock/products";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit{
  public products:Products[] = products;
  items : any ;
  // total : any;
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
