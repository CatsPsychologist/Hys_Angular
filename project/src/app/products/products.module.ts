import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductsComponent} from "./products.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BtnAdminComponent } from './btn-admin/btn-admin.component';


@NgModule({
    declarations: [
        ProductsComponent,
        HeaderComponent,
        FooterComponent,
        BtnAdminComponent
    ],
    exports: [
        ProductsComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule { }
