import {Component, OnInit} from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {BehaviorSubject, delay, Observable, of} from "rxjs";
import {FilterService} from "../shared/services/filter.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
  public productsCall:Products[] = [];

  constructor(
    private FilterService : FilterService
  ) {}

  ngOnInit() {
    of(products)
      // .pipe(delay(2000))
      .subscribe(prod => this.productsCall = prod.slice(0,5))
  }

  priceInputFilter({value, number} : any ){
    this.productsCall = this.FilterService.priceInputFilter(this.productsCall, value, number)
  }


}
