import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Products, ProductsHttp} from "../../../../shared/models/products.interface";
import {CartService} from "../services/cart.service";
import {Observable, Subscription} from "rxjs";
import {ProductHTTPService} from "../../../admin/shared/services/product-http.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit{
  @Input() products : any;
  @Input() caption: string = ''
  items : Products[] ;
  total : Observable<number>;

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit() {

  }

  addToCart(product: any) {
    product.isChosen = !product.isChosen;

    if(product.isChosen){
      this.cartService.addToCart(product);
    }
    else {
      this.items = this.cartService.clearCartItem(product)
    }
  }

}
