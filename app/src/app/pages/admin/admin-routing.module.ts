import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./users/users.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        pathMatch: "full",
        component: UsersComponent
      },
      {
        path: 'products',
        pathMatch: "full",
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
