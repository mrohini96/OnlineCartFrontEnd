import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  myApiCallCategory() {
    console.log("this is myApiCallCategory() in CategoryService");
    let header= new HttpHeaders({})
    return this.http.get("http://localhost:8080/onlinecart-1.0/onlinecart/product/categories")
  }
}
