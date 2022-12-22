import { Injectable } from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];

  addToCart(product: Products) {
    this.items.push(product);
    this.getTotal(this.items);
  }

  getTotal(productArr : Products[]): number{
    console.log(productArr.reduce((acc, product) => acc + product.price, 0))
    return productArr.reduce((acc, product) => acc + product.price, 0)
  }

  getItems() {
    return this.items;
  }

  clearCartItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    return this.getItems()
  }


}
