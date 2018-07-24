import { Injectable } from '@angular/core';
import { Products } from './products';
// import { User } from './user';
import { Http, Response } from '@angular/http';
//import { map } from 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: Http) { }
/*
  myApiCall(){
    return this.http.get("http://localhost:8080/onlinecart-1.0/onlinecart/loginuserget?name=Rohini@gmail.com&password=1234").map(res => res.json());
  }
  */
  myData(userObj) {
    if (userObj.name == 'Rohini' && userObj.pswd == '12345' ){
      alert("login successful");
    }
    
  }

}
