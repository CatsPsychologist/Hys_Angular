import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsComponent} from "./products.component";
import { HeaderComponent } from './header/header.component';
import { BtnAdminComponent } from './btn-admin/btn-admin.component';


@NgModule({
    declarations: [
        ProductsComponent,
        HeaderComponent,
        BtnAdminComponent
    ],
  exports: [
    ProductsComponent,
    HeaderComponent,
    BtnAdminComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }
