import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductHTTPService} from "../../admin/shared/services/product-http.service";

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
    private httpService: ProductHTTPService
  ) {}

  ngOnInit() {
    this._subscription = this.httpService.getList()
      .subscribe(productList => {
        this.singleProduct = productList

        this.singleProduct.forEach((value: any, index: number) => {
          value.isChosen = false;
          value.amount = 1;
          value.identifier = index + 1
        })
        this.identifier = parseInt(this.route.snapshot.paramMap.get('id')!) ;
        this.singleProduct = this.singleProduct.slice(this.identifier - 1 , this.identifier)
        console.log(this.singleProduct)
        console.log(this.identifier )
      })

  }

  addToCart(product: Products) {
    product.isChosen = !product.isChosen;
    }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }
}
