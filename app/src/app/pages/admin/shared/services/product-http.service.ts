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
}
