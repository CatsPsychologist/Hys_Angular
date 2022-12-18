import { Component } from '@angular/core';
import {products} from "./shared/mock/products";
import {Products} from './shared/models/products.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public products:Products[] = products;

  ngOnInit() : void{
    this.products = products;
  }
}
