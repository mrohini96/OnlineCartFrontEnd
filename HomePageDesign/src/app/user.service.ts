import { Injectable } from '@angular/core';
//import { Categories } from './categories';
//import 'rxjs/add/operator/catch';
// import { User } from './user';
import { Http, Response } from '@angular/http';
//import { map } from 'rxjs/add/operator/map';
//import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: Http) { }
  userDetails: any;

  myApiCall(): Observable<any>{
    return this.http.get(
      "http://localhost:8080/onlinecart-1.0/onlinecart/loginuserget?name=Rohini@gmail.com&password=1234")
      .pipe(map(res => res.json()));
      // .map(res => res.json());
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
