import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductHTTPService} from "../../admin/shared/services/product-http.service";
import {CartService} from "../shared/services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy{
  productCaption: string = 'Product'
  singleProduct: any;
  public identifier: number;

  private _subscription : Subscription;

  constructor(
    private route: ActivatedRoute,
    private httpService: ProductHTTPService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this._subscription = this.httpService.getList()
      .subscribe(productList => {
        this.singleProduct = productList

        this.singleProduct.forEach((product: any, index: number) => {
          product.amount = 1;
          product.identifier = index + 1;
          this.cartService.checkCart(product);
        })
        this.identifier = parseInt(this.route.snapshot.paramMap.get('id')!) ;
        this.singleProduct = this.singleProduct.slice(this.identifier - 1 , this.identifier)
      })

  }

  addToCart(product: Products) {
    product.isChosen = !product.isChosen;
    }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }
}
