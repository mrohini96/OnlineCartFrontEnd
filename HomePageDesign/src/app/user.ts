import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface User{
    userName: string;
    password: string;
  }
 
export interface UserResponse {
    status: number;
    responseMessage: string;
}