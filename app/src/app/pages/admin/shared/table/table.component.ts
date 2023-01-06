import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
import {FilterService} from "../services/filter.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() products:Products[] = [];
  @Output() newItemEvent = new EventEmitter<{value : string, number : number}>()

  constructor(

  ) {}

  logItem({value, number} : any){
    this.newItemEvent.emit({value, number})
  }

  // priceFilter(){
  //   this.productsCall = this.FilterService.priceFilter(this.productsCall, 'less', 50)
  // }
}
