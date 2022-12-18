import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule} from "./shared/shared.module";
import {ShopComponent} from "./shop.component";

@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent
  ],
  exports: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ShopModule { }
