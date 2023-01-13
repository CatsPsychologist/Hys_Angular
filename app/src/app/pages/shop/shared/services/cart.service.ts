import { Injectable } from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
import {BehaviorSubject, Observable} from 'rxjs';
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];
  private cartTotal$ = new BehaviorSubject<number>(0);

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  addToCart(product: Products) {
    this.items.push(product);
    this.getTotal(this.items);
    this.localStorageService.setData('cart products', this.items)
  }

  clearCartItem(product: Products){
    this.items = this.items.filter(item => item !== product);
    this.getTotal(this.items);
    product.amount = 1;
    return this.getItems();
  }

  getTotal(productArr : Products[]){
     this.cartTotal$.next(
      productArr.reduce((acc, product) => acc + product.price * product.amount, 0)
    )
    return this.getTotalObs()

  }
  getTotalObs(): Observable<number>{
    return this.cartTotal$.asObservable()
  }

  getItems() {
    return this.items;
  }

  cartCounter(){
    this.getTotal(this.items);
  }
}
