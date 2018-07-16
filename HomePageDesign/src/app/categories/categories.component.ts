import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {PRODUCTS} from '../mock-products';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
   products = PRODUCTS;

  selectedproduct: Products;
  constructor() { }

  ngOnInit() {
  }

    onSelect(product: Products): void {
    this.selectedproduct = product;
  }
}
