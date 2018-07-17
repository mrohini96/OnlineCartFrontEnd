import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
  name = 'Angular';
  characters = [
  'Moto g4 plus',
  'iphone X',
  'MI note 4',
  'iphone 6'
    ]
  constructor() { }

  ngOnInit() {
  }

}
