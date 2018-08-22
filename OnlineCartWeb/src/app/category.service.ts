import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }

  myApiCallCategory() {
    console.log("this is myApiCallCategory() in CategoryService");
    let header= new HttpHeaders({})
    let url = environment.appBaseUrl + "/onlinecart/product/categories"
    return this.http.get(url)
  }
}
