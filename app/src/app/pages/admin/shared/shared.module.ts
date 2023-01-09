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
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    NavComponent,
    TableComponent,
    LoaderComponent,
    DialogBoxComponent
  ],
  exports: [
    NavComponent,
    TableComponent,
    LoaderComponent,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],

})
export class SharedModule { }
