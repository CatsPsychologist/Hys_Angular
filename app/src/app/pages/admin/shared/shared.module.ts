import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavComponent,
    TableComponent
  ],
  exports: [
    NavComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
