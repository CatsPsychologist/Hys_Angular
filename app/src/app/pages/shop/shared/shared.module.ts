import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
    declarations: [
        ButtonComponent,
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
