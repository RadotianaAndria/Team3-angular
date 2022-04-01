import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Panier } from '../service/mapping/panier';
import { Product } from '../service/mapping/product';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  products : Product[] = [];
  total = 0;
  monPanier = sessionStorage.getItem("panier");
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    let panier = this.monPanier;
      if(panier != null){
        var paniers = JSON.parse(panier);
        this.products = paniers.products;
        for(var i =0; i<this.products.length; i++){
          this.total += this.products[i].price; 
        }
      }
  }

  async valider(){
    if(this.monPanier != null){
      console.log("Niditra");
      var panier = JSON.parse(this.monPanier);
      var idClient = panier.idClient;
      var quantite = panier.quantite;
      var products = panier.products;
      let token:string = sessionStorage.getItem("access_token") ?? "";
      for(var i = 0; i<products.length; i++){
        if(await this.apiService.addPanier(token, idClient, products[i].id, quantite)){
          console.log("Produit ajouté dans le panier");
        }
      }
    }
  }
}
