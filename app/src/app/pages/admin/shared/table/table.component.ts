import { Component } from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public products:Products[] = [];
}
