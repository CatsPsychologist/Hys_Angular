import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
    declarations: [
        ButtonComponent,
        HeaderComponent,
        TooltipComponent,
        ProductsListComponent
    ],
    exports: [
        HeaderComponent,
        ButtonComponent,
        ProductsListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class SharedModule { }
