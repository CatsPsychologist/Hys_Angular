import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TooltipComponent } from './tooltip/tooltip.component';


@NgModule({
    declarations: [
        ButtonComponent,
        HeaderComponent,
        TooltipComponent
    ],
    exports: [
        HeaderComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class SharedModule { }
