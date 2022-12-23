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
  total: any;

  constructor(
    private cartService : CartService,

  ) {}

  ngOnInit(){
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal(this.items);
  }

  clearCartItem(product: Products){
    this.items = this.cartService.clearCartItem(product);
    product.isChosen = false;
  }

}
