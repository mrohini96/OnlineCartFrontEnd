import { Injectable } from '@angular/core';
import { Products } from './products';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  myData(user:User) {
    if (user.userName == 'Rohini' && user.password == '12345' ){
      alert("login successful");
    }
    
  }
  constructor() { }
}
