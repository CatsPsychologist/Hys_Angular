import {Component, OnDestroy, OnInit} from '@angular/core';
import {Products} from "../../../shared/models/products.interface";
import {products} from "../../../shared/mock/products";
import {ProductHTTPService} from "../../admin/shared/services/product-http.service";
import {Observable, Subscription} from "rxjs";
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
    private httpService: ProductHTTPService
  ) {}

  ngOnInit() {
    this._subscription = this.httpService.getList()
      .subscribe(productList => {
        this.productsHome = productList

        this.productsHome = this.productsHome.slice(0,3)
        this.productsHome.forEach((value: any, index: number) => {
          value.isChosen = false;
          value.amount = 1;
          value.identifier = index + 1
        })
        console.log(this.productsHome)
      })
  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }

}
