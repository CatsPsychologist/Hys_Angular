import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import {AdminComponent} from "./admin.component";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  exports: [
    AdminComponent,
  ]
})
export class AdminModule { }
