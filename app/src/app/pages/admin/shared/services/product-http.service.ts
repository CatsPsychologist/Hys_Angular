import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductHTTPService {

  private url: string = 'https://hys-fe-course-api.vercel.app/products'

  constructor(private http: HttpClient) { }

  getList<T>(): Observable<T>{
       return this.http.get<T>(this.url)
  }

  // getById<T>(id: number): Observable<T> {
  //   return this.http.get<T>(this.url);
  // }
  //
  // update<T>(product): Observable<T> {
  //   return this.http.put(this.url);
  // }
  //
  // create<T>(product): Observable<T> {
  //   return this.http.post(this.url);
  // }
  //
  // delete<T>(product): Observable<T> {
  //   return this.http.delete(this.url);
  // }
}
