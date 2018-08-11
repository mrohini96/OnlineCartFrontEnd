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
    myApiCall(userlogin:any) {
    console.log("Inside Login myapicall()");
    console.log("Name Entered="+userlogin.name+"Password Entered="+userlogin.pswd);
    let header= new HttpHeaders({})
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/login?';
    let url=urlstart+"name="+userlogin.name+"&password="+userlogin.pswd;
    console.log("Complete url is="+url);
    return this.http.get(url);
    //return this.http.get("http://localhost:8080/onlinecart-1.0/onlinecart/user/login?name=Rohini@gmail.com&password=1234")
    }
    
  }

 
