import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  myApiCall(userregister:any) {
    console.log("this is myapi() in RegisterService");
    console.log("Name is"+userregister.name);
    let header= new HttpHeaders({})
    let urlstart = environment.appBaseUrl + "/onlinecart/user/register?";
    let url = urlstart + "name="+userregister.name+"&password="+userregister.password+"&firstname="+userregister.firstname+"&lastname="+userregister.lastname;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }
}
