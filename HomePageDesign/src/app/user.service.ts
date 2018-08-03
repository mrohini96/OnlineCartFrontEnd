import { Injectable } from '@angular/core';
//import { Categories } from './categories';
//import 'rxjs/add/operator/catch';
// import { User } from './user';
import { Http, Response } from '@angular/http';
//import { map } from 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

import {UserResponse} from './user';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  constructor(private http: Http) { }
  userDetails: any;

  myApiCall(): Observable<UserResponse>{
    console.log("inside myApiCall Service");
    return this.http.get(
      "http://localhost:8080/onlinecart/product/categories"
     )
    //  .pipe(map(res => res.json()));
       .pipe(map(res =><UserResponse>res.json()));
     // (map((response: any) => response.json()));
    //console.log("inside myApiCall Service");  "http://localhost:8080/onlinecart-1.0/user/login?name=Rohini@gmail.com&password=1234"
  }


  /*saveAsupPref(url,params): Observable<any>{
    let _urlParams = new URLSearchParams();
    for(let element in params) {
      _urlParams.append(element,params[element]);
    }
    
      return this.http.post( url, _urlParams )
      .map(this.extractData)
      .catch(this.handleError);
  
  }*/

  myData(userObj) {
    if (userObj.name == 'Rohini' && userObj.pswd == '12345' ){
      alert("login successful");
    }
    
  }

}