// import { Injectable } from '@angular/core';
// import {Products} from "../../../../shared/models/products.interface";
// @Injectable({
//   providedIn: 'root'
// })
// export class FilterService {
//
//   constructor() { }
//
//   priceInputFilter(productArr : Products[], indicator: String, price: number ){
//     if(indicator === "Price more than"){
//      return productArr.filter(prod => prod.price > price)
//     }
//     if(indicator === "Price less than"){
//       return productArr.filter(prod => prod.price < price)
//     }
//     return productArr
//   }
//
//   priceFilter(productArr : Products[]){
//     let sorted;
//     if (sorted){
//       sorted = false
//       console.log(sorted)
//       return productArr.sort((a,b) => b.price - a.price)
//     }else {
//       sorted = true
//       console.log(sorted)
//       return productArr.sort((a,b) => a.price - b.price)
//     }
//
//   }
//
//   nameFilter(productArr : Products[]){
//     return productArr.sort((a,b) =>  a.name > b.name ? 1 : -1)
//   }
//
//   idFilter(productArr : Products[]){
//     return productArr.sort((a,b) => b.id - a.id)
//   }
// }
