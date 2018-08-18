import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  myApiCallProduct() {
    console.log("this is myApiCallProduct() in ProductService");
    let header= new HttpHeaders({})
    return this.http.get(" http://localhost:8080/onlinecart-1.0/onlinecart/product/view")
  }

}
