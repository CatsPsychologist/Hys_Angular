import { Injectable } from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Products[] = [];

  addToCart(product: Products) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCartItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    return this.getItems()

  }
}
