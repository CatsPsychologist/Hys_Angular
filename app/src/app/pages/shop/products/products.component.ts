import {Component, Input, OnInit, Output} from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {CartService} from "../shared/services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Products[] = products;
  productsCaption: string = 'Products';
  // items : Products[] ;
  // total : Observable<number>;
  //
  // constructor(
  //   private cartService: CartService
  // ) {}
  //
  ngOnInit() : void{
    // this.products = products;
  }
  // addToCart(product: Products) {
  //   product.isChosen = !product.isChosen;
  //
  //   if(product.isChosen){
  //     this.cartService.addToCart(product);
  //   }
  //     else {
  //     this.items = this.cartService.clearCartItem(product)
  //   }
  // }
}
