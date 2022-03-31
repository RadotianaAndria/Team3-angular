import { Component, OnInit } from '@angular/core';
import { Product } from '../service/mapping/product';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  products : Product[] = [];
  total = 0;
  constructor() { }

  ngOnInit(): void {
    let panier = sessionStorage.getItem("panier");
      if(panier != null){
        var paniers = JSON.parse(panier);
        this.products = paniers.products;
        for(var i =0; i<this.products.length; i++){
          this.total += this.products[i].price; 
        }
      }
  }

  valider(){}
}
