import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  myApiCallProduct() {
    console.log("this is myApiCallProduct() in ProductService");
    let header= new HttpHeaders({})
    let url = environment.appBaseUrl + "/onlinecart/product/view"
    return this.http.get(url)
  }

}
