import { Component } from '@angular/core';
import {products} from "./mock/products";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products = products;
  title = 'project';
}


