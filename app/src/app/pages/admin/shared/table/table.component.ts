import {Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';
import {Products} from "../../../../shared/models/products.interface";
// import {products} from "../../../../shared/mock/products";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog"
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";
import {ProductHTTPService} from "../services/product-http.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnInit, OnDestroy{
  // dataSource:Products[];
  // @Output() newItemEvent = new EventEmitter<{value : string, number : number}>()
  products: any;

  displayedColumns: string[] = ['id', 'name', 'price', 'action', 'add_btn'];

  @Input() tableProducts: MatTableDataSource<Products>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Products>;


  private _subscription : Subscription;

  constructor(
    public dialog: MatDialog,
    private httpService: ProductHTTPService
  ) {

  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this._subscription = this.httpService.getList()
      .subscribe(productList => {
        this.products = productList
        console.log(this.products)
        this.products.forEach((value: any, index: number) => {
          value.isChosen = false;
          value.amount = 1;
          value.identifier = index + 1
        })
        this.tableProducts = new MatTableDataSource(this.products);
        this.tableProducts.paginator = this.paginator;
        this.tableProducts.sort = this.sort;
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableProducts.filter = filterValue.trim().toLowerCase();
    if (this.tableProducts.paginator) {
      this.tableProducts.paginator.firstPage();
    }
  }

  openDialog(action: any,obj : any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj,
      panelClass: 'custom-modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Delete'){
        this.deleteRowData(result.data);
        this.table.renderRows()
      }else if(result.event == 'Update'){
        this.updateRowData(result.data)
      }else if(result.event == 'Add'){
        this.addRowData(result.data)
      }
    });
  }

  deleteRowData(row_obj: Products){
    this.tableProducts = new MatTableDataSource(this.tableProducts.filteredData
      .filter(value => value.id != row_obj.id))
    console.log(this.tableProducts.filteredData)
  }
  updateRowData(row_obj: Products){
    this.tableProducts = new MatTableDataSource(this.tableProducts.filteredData
      .filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.price = row_obj.price;
      }
      return true;
    })
    )
  }
  addRowData(row_obj: Products){
   this.tableProducts.filteredData.push({
      id: this.tableProducts.filteredData.length + 1 ,
      name:row_obj.name,
      price: row_obj.price,
      isChosen: false,
      amount: 1
    })
    this.tableProducts = new MatTableDataSource(this.tableProducts.filteredData)
    this.table.renderRows();

  }

  ngOnDestroy() {
    this._subscription.unsubscribe()
  }

}
