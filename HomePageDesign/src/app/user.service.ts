import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/catch';
// import { User } from './user';
import { Http, Response } from '@angular/http';
//import { map } from 'rxjs/add/operator/map';
//import 'rxjs/Rx';
// import { Observable } from 'rxjs';
// import { map } from "rxjs/operators"
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  userDetails: any;

  // myApiCall(): Observable<any>{
  //   return this.http.get(
  //     "http://localhost:8080/onlinecart-1.0/user/login?name=Rohini@gmail.com&password=1234")
  //     //.map(res => res.json());
  //     //.pipe(map(res => res.json()));
       
  //    // (map((response: any) => response.json()));

  // }

  myApiCall() {

    let header= new HttpHeaders({})
    let url ='http://localhost:8080/onlinecart-1.0/onlinecart/user/login?';
    'name=Rohini@gmail.com' +
    '&password=1234';
    console.log(url);
    return this.http.get("http://localhost:8080/onlinecart-1.0/onlinecart/user/login?name=Rohini@gmail.com&password=1234")
    
      //"http://localhost:8080/onlinecart-1.0/user/login?name=Rohini@gmail.com&password=1234")
      //.map(res => res.json());
      //.pipe(map(res => res.json()));    
     // (map((response: any) => response.json()));
     

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
