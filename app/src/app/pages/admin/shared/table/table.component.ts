import {Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit} from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
import {FilterService} from "../services/filter.service";
import {products} from "../../../../shared/mock/products";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  @Input() products:Products[] = [];
  @Output() newItemEvent = new EventEmitter<{value : string, number : number}>()


  ngOnInit() {


  }
  constructor(
    private filterService : FilterService,
  ) {}

  logItem({value, number} : any){
    this.newItemEvent.emit({value, number})
  }

  priceFilter(productArr : Products[]){
    return this.filterService.priceFilter(productArr)
  }

  nameFilter(productArr : Products[]){
    return this.filterService.nameFilter(productArr)
  }

  idFilter(productArr : Products[]){
    return this.filterService.idFilter(productArr)
  }
  // priceFilter(){
  //   this.productsCall = this.FilterService.priceFilter(this.productsCall, 'less', 50)
  // }

}
