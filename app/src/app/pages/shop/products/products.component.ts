import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {CartService} from "../shared/services/cart.service";
import {Observable, Subscription} from "rxjs";
import {ProductHTTPService} from "../../admin/shared/services/product-http.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy{
  products:any;
  productsCaption: string = 'Products';

  private _subscription : Subscription;

  constructor(
    private httpService: ProductHTTPService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this._subscription = this.httpService.getList()
      .subscribe(productList => {
        this.products = productList as Observable<any>

        this.products.forEach((product: any, index: number) => {

          product.amount = 1;
          product.identifier = index + 1;
          this.cartService.checkCart(product);
        })
      })
  }


  ngOnDestroy() {
    this._subscription.unsubscribe()
  }
}
