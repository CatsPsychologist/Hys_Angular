import {Component, OnInit} from '@angular/core';
import {products} from "../../../../shared/mock/products";
import {Products} from "../../../../shared/models/products.interface";
import {CartService} from "../services/cart.service";
import { Router } from '@angular/router';

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
    if(this.router.url === '/cart') return
    // console.log(this.router.url)
    this.toolTip = 'toolShow';
  }
  toolHide(){
    this.toolTip = 'toolHide'
  }


  constructor(
    private cartService : CartService,
    public router: Router
  ) {
    this.showCart = false
  }

  ngOnInit(){
    this.items = this.cartService.getItems();
  }

}
