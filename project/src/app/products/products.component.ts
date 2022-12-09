import { Component } from '@angular/core';
import {products} from "../mock/products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products = products;
}
