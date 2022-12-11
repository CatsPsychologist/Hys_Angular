import { Component } from '@angular/core';
import { products } from "./mock/products";
import {Products} from "./models/products_interaface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products:Products[] = products;
  title = 'project';

  ngOnInit() : void{
    this.products = products;
  }
}


