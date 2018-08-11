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
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/login?';
  //  let url=urlstart+"name="+userlogin.name+"&password="+userlogin.password;
    //console.log("Complete url is="+url);
    //return this.http.get(url);
   // console.log(url);
    return this.http.get("http://localhost:8080/onlinecart-1.0/onlinecart/user/login?name=Rohini@gmail.com&password=1234")
   }
 

  myData(userObj) {
    if (userObj.name == 'Rohini' && userObj.pswd == '12345' ){
      alert("login successful");
    }
    
  }

 }
