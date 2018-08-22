import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { GlobalData } from './globaldata';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  constructor(private http: HttpClient, private globalData: GlobalData) { }

  myApiCallMyOrders() {
    console.log("Inside OrderService myApiCallMyOrders()");
    let header = new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/order/view?";
    let url = urlstart + "name="+this.globalData.userName;
    console.log("Complete url is = "+url);
    return this.http.get(url);
  }
  
  
}

 
