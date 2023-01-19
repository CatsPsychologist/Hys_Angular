import {Component, OnDestroy, OnInit} from '@angular/core';
import {Products} from "../../../shared/models/products.interface";
import {products} from "../../../shared/mock/products";
import {ProductHTTPService} from "../../admin/shared/services/product-http.service";
import {Observable, Subscription} from "rxjs";
import {CartService} from "../shared/services/cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  public productsHome: any;
  public homeCaption: string = 'Home';
  private _subscription : Subscription;

  constructor(
    private httpService: ProductHTTPService,
    private cartService: CartService,
  ) {}

  ngOnInit() {

    this._subscription = this.httpService.getList()
      .subscribe(productList => {
        this.productsHome = productList;

        this.productsHome = this.productsHome.slice(0,3);
        this.productsHome.forEach((product: any, index: number) => {


          product.amount = 1;
          product.identifier = index + 1
          this.cartService.checkCart(product);
        })
      });
  }

  checkCartItems(){
    return this.cartService.getItems();
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
