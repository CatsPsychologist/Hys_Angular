import { NgModule } from '@angular/core';
import {ErrorsComponent} from "./errors.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations:[
    ErrorsComponent
  ],
  exports:[
    ErrorsComponent
  ],
  imports:[
    CommonModule,
    RouterModule,
  ]

})
export class ErrorsModule {

}
