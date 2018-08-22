import { Injectable} from "@angular/core";
import { User } from './user';
import { USER } from './mockuser';
import { Product } from './product';
import { PRODUCTS } from './mockproduct';
@Injectable()
export class GlobalData{
    
    // single data
    data: string='GlobalData';
    userName: string = null;
    cartProductCount: number = 0;

    // array data
    cartProductIds: number[] = [];

    // Initialize the Flags for Global Icons
    loginEnableFlag: boolean = false;
    
    // Custom Global Objects for sharing and updating based on state 
    productsJsonArray: Product[] = PRODUCTS;

}