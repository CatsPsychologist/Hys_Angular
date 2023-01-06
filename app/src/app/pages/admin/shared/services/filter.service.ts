import { Injectable } from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  priceInputFilter(productArr : Products[], indicator: String, price: number ){
    if(indicator === "Price more than"){
     return productArr.filter(prod => prod.price > price)
    }
    if(indicator === "Price less than"){
      return productArr.filter(prod => prod.price < price)
    }
    return productArr
  }
}
