import { Injectable } from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];
  cartTotal$ = new BehaviorSubject<number>(0);

  addToCart(product: Products) {
    this.items.push(product);
    this.getTotal(this.items);
  }

  clearCartItem(product: Products){
    this.items = this.items.filter(item => item !== product);
    this.getTotal(this.items);
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
