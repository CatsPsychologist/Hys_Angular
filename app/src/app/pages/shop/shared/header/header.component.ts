import {Component, OnInit} from '@angular/core';
import {products} from "../../../../shared/mock/products";
import {Products} from "../../../../shared/models/products.interface";
import {CartService} from "../services/cart.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public products:Products[] = products;
  items : any ;
  showCart: boolean;
  public toolTip: string = 'toolHide';

  toolShow(){
    this.toolTip = 'toolShow';
  }
  toolHide(){
    this.toolTip = 'toolHide'
  }


  constructor(
    private cartService : CartService,
  ) {
    this.showCart = false
  }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }

  clearCartItem(id : number){
    this.items = this.cartService.clearCartItem(id);
    products[id - 1].isChosen = false;
  }

}
