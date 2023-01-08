import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    NavComponent,
    TableComponent,
    LoaderComponent
  ],
  exports: [
    NavComponent,
    TableComponent,
    LoaderComponent,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],

})
export class SharedModule { }
