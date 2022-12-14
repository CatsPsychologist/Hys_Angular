import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import ErrorsModule
// import { ErrorsComponent } from './pages/errors/errors.component';
import {SharedModule} from "./pages/shop/shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
