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
<<<<<<< HEAD:app/src/app/app.module.ts
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
=======
    imports: [
    ],
>>>>>>> e92d5f18eccbf220ec28fbfee08c0ba52397994d:project/src/app/app.module.ts
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
