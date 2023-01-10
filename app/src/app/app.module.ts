import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ErrorsModule
// import { ErrorsComponent } from './pages/errors/errors.component';
import {SharedModule} from "./pages/shop/shared/shared.module";

import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UahPipe } from './shared/pipes/uah.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UahPipe,
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    // MatSortModule,
    // MatFormFieldModule,
    // MatPaginatorModule,
    // MatInputModule,
    // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
