import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedModule} from "./pages/shop/shared/shared.module";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { UahPipe } from './shared/pipes/uah.pipe';
import {ErrorsModule} from "./pages/errors/errors.module";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UahPipe,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ErrorsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
