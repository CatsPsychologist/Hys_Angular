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
 // dataSource:Products[];
  // @Output() newItemEvent = new EventEmitter<{value : string, number : number}>()

  public products:Products[] = products;

  displayedColumns: string[] = ['id', 'name', 'price'];
  @Input()  tableProducts: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.tableProducts = new MatTableDataSource(products);
  }

  ngAfterViewInit() {
    this.tableProducts.paginator = this.paginator;
    this.tableProducts.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableProducts.filter = filterValue.trim().toLowerCase();
    console.log(this.tableProducts)
    if (this.tableProducts.paginator) {
      this.tableProducts.paginator.firstPage();
    }
  }


}
