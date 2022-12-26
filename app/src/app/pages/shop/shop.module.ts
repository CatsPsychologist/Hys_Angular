import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule} from "./shared/shared.module";
import {ShopComponent} from "./shop.component";
import {CartService} from "./shared/services/cart.service";
import {ShopRoutingModule} from "./shop-routing.module";
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [
    ShopComponent,
    CartComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    TooltipComponent
  ],
    exports: [
        ShopComponent,
    ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    RouterModule
  ],
  providers: [
    CartService
  ]
})
export class ShopModule { }
