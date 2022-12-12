import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  // {
  //   path: 'product',
  //   pathMatch: 'full',
  //   loadChildren: () => import('./products/product/product.module').then(m => m.ProductModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
