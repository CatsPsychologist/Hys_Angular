import { Component, OnInit, Input } from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  public products:Products[] = products;
  public id: number;
  items: Products[];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
     this.id = parseInt(this.route.snapshot.paramMap.get('id')!) - 1;
  }
  addToCart(product: Products) {
    product.isChosen = !product.isChosen;
    }

}
