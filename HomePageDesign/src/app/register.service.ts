import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  myApiCall(userregister:any) {
    console.log("this is myapi() in RegisterService");
    console.log("Name is"+userregister.name);
    let header= new HttpHeaders({})
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/register?';
    let url=urlstart+"name="+userregister.name+"&password="+userregister.password+"&firstname="+userregister.firstname+"&lastname="+userregister.lastname;
    console.log("Complete url is="+url);
    return this.http.get(url);
    //return this.http.get("http://localhost:8888/onlinecart-1.0/onlinecart/user/register?name=Rohini@gmail.com&password=1234&firstname=Rohini&lastname=Mallewade")
  }
}
