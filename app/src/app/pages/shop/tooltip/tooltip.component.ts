import { Component } from '@angular/core';
import {Products} from "../../../shared/models/products.interface";
import {CartService} from "../shared/services/cart.service";
import {products} from "../../../shared/mock/products";
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  public products:Products[] = products;
  items : any ;
  public cartTotal = 0;

  constructor(
    private cartService : CartService,

  ) {  }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }

  // clearCartItem(id : number){
  //   this.items = this.cartService.clearCartItem(id);
  //   products[id - 1].isChosen = false;
  // }

  // calcCartTotal() {
  //   this.products.forEach(product => {
  //     this.cartTotal += (1 * product.price)
  //   })
  // }

}
