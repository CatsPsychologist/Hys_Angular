import { Injectable } from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setData(key: string, product: Products[]){
    localStorage.setItem(key, JSON.stringify(product))
  }

  getData(){

  }
}
