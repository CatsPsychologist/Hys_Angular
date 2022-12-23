import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop.component";
import {CartComponent} from "./cart/cart.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {ErrorsComponent} from "../errors/errors.component";

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
      },
      {
        path: 'cart',
        pathMatch: 'full',
        component: CartComponent
      },
      {
        path: 'products/:id',
        pathMatch: 'full',
        component: ProductComponent
      },
      {
        path: 'products',
        pathMatch: 'full',
        component: ProductsComponent
      },
      { path: '**',
        pathMatch: 'full',
        component: ErrorsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
