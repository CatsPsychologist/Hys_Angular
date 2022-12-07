import { Component } from '@angular/core';
import {data} from "./data/product_data";

console.log(data)
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data = data;
  title = 'project';
}


