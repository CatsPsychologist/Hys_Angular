import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Products} from "../../../../shared/models/products.interface";
import {products} from "../../../../shared/mock/products";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit{
  public products:Products[] = products;
  items : any ;
  showCart: boolean;
  public cartTotal = 0;


  constructor(
    private cartService : CartService,

  ) {
    this.showCart = false;
  }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }

  clearCartItem(id : number){
    this.items = this.cartService.clearCartItem(id);
    products[id - 1].isChosen = false;
  }

}
