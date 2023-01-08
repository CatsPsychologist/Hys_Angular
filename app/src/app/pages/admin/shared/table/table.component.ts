import {Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit} from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
import {products} from "../../../../shared/mock/products";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit{
  // @Input() products:Products[] = [];
  // @Output() newItemEvent = new EventEmitter<{value : string, number : number}>()


  public products:Products[] = products;

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(products);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // logItem({value, number} : any){
  //   this.newItemEvent.emit({value, number})
  // }
  //
  // priceFilter(productArr : Products[]){
  //   return this.filterService.priceFilter(productArr)
  // }
  //
  // nameFilter(productArr : Products[]){
  //   return this.filterService.nameFilter(productArr)
  // }
  //
  // idFilter(productArr : Products[]){
  //   return this.filterService.idFilter(productArr)
  // }
  // priceFilter(){
  //   this.productsCall = this.FilterService.priceFilter(this.productsCall, 'less', 50)
  // }

}
