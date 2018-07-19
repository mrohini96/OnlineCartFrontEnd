import { Injectable } from '@angular/core';
import { Products } from './products';
// import { User } from './user';
// import { HTTP } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  myData(userObj) {
    if (userObj.name == 'Rohini' && userObj.pswd == '12345' ){
      alert("login successful");
    }
    
  }

}
