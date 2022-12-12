import {Component, Input} from '@angular/core';
import {Products } from "../models/products_interaface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent{
  
  @Input() products: Products[];


}
