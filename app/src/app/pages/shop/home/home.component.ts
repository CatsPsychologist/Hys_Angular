import {Component, OnInit} from '@angular/core';
import {Products} from "../../../shared/models/products.interface";
import {products} from "../../../shared/mock/products";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public productsHome:Products[] = products;
  public homeCaption: string = 'Home';

  ngOnInit() {
    this.productsHome = this.productsHome.slice(0,3)
  }
}
