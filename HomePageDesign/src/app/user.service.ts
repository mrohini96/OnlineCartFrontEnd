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
    console.log("Name Entered="+userlogin.name+"Password Entered="+userlogin.pswd);
    let header= new HttpHeaders({})
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/login?';
    let url=urlstart+"name="+userlogin.name+"&password="+userlogin.pswd;
    return this.http.get(url);
    }
    myApiCallAccount(userJson){
      let header= new HttpHeaders({})
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/update?';
    let url=urlstart+"name="+userJson.name+"&city="+userJson.city+"&state="+userJson.state+"&country="+userJson.country+"&address1="+userJson.address1+"&address2="+userJson.address2+"&phone="+userJson.phone;
    console.log("Complete url is="+url);
    return this.http.get(url);
    }
  }

 
