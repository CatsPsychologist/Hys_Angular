import { Component, OnInit, Input } from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../shared/services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  public products:Products[] = products;
  public id: any;
  public btnValue: string = 'Add to cart';

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
     this.id = parseInt(this.route.snapshot.paramMap.get('id')!) - 1;
  }
  addToCart(product: Products) {
    this.btnValue = 'Remove from cart';
    this.cartService.addToCart(product);

  }

}
