import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductsModule} from "./products/products.module";

import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ButtonComponent } from './shared/button/button.component';
import {HeaderComponent} from "./shared/header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ButtonComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProductsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
