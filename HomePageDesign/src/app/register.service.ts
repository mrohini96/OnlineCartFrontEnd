import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  myApiCall() {
    console.log("this is myapi() in RegisterService");
    let header= new HttpHeaders({})
    let url = 'http://localhost:8080/onlinecart-1.0/onlinecart/user/login?';
    'name=Rohini@gmail.com' +
    '&password=1234';
    console.log(url);
    return this.http.get("http://localhost:8080/onlinecart-1.0/onlinecart/user/register?name=Chinmaya@gmail.com&password=admin&firstname=Chinmaya&lastname=Pradhan")
    
    
      //"http://localhost:8080/onlinecart-1.0/user/login?name=Rohini@gmail.com&password=1234")
      //.map(res => res.json());
      //.pipe(map(res => res.json()));    
     // (map((response: any) => response.json()));
     

  }
}
