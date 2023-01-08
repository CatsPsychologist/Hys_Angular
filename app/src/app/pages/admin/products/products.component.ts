import {Component, OnInit} from '@angular/core';
import {products} from "../../../shared/mock/products";
import {Products} from "../../../shared/models/products.interface";
import {BehaviorSubject, delay, Observable, of, tap} from "rxjs";
// import {FilterService} from "../shared/services/filter.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
  public productsCall:Products[] = products;
  public isLoaded: boolean = false;

  constructor(
    // private FilterService : FilterService
  ) {}

  ngOnInit() {
    // of(products)
    //   .pipe(delay(2000))
    //   .subscribe(prod => {
    //     console.log(prod)
    //     this.productsCall = prod;
    //     this.isLoaded = true
    //   })

  }

  // priceInputFilter({value, number} : any ){
  //   this.productsCall = this.FilterService.priceInputFilter(this.productsCall, value, number)
  // }


}
