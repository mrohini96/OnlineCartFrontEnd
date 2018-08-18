import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalData } from './globaldata';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient, private globalData: GlobalData) { }

  myApiCallLogin(userLogin:any) {
    console.log("Inside Login myapicall()");
    console.log("Name Entered="+userLogin.name+"Password Entered="+userLogin.password);
    let header= new HttpHeaders({})
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/login?';
    let url=urlstart+"name="+userLogin.name+"&password="+userLogin.password;
    console.log("Complete url is="+url);
    return this.http.get(url);
  }
  
  myApiCallAccount(userJson){
    let header= new HttpHeaders({})
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/update?';
    let url=urlstart+"name="+this.globalData.userName+"&address="+userJson.userAddress+"&city="+userJson.userCity+"&state="+userJson.userState+"&country="+userJson.userCountry+"&zip="+userJson.userZip+"&phone="+userJson.userPhone;
    console.log("Complete url is="+url);
    return this.http.get(url);
  } 

  myApiCallGetUserDetail(){
    let header= new HttpHeaders({})
    let urlstart='http://localhost:8080/onlinecart-1.0/onlinecart/user/view?';
    let url=urlstart+"name="+this.globalData.userName;
    console.log("Complete url is="+url);
    return this.http.get(url);
  } 
}

 
