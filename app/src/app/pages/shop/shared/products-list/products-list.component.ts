import {Component, Input, OnInit, Output} from '@angular/core';
import {products} from "../../../../shared/mock/products";
import {Products} from "../../../../shared/models/products.interface";
import {CartService} from "../services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  @Input() products: Products[];
  @Input() caption: string = ''
  items : Products[] ;
  total : Observable<number>;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() : void{
    // this.products = products;
  }
  addToCart(product: Products) {
    product.isChosen = !product.isChosen;

    if(product.isChosen){
      this.cartService.addToCart(product);
    }
    else {
      this.items = this.cartService.clearCartItem(product)
    }
  }
}
