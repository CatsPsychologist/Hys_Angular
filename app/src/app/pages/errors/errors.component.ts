import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent {
  constructor(
    public router: Router
  ) {
  }
}
