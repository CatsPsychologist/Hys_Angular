import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorsComponent} from "./pages/errors/errors.component";
const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'admin',
    // pathMatch: 'full',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**',
    pathMatch: 'full',
    component: ErrorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
