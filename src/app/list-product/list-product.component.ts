import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../service/mapping/product';
import { ProductService } from '../service/product.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  listProduct: Product[] = [];
  keyword: string | null = '';
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private authenticationService: AuthService
  ) { }

  ngOnInit(): void {
    this.keyword = this.route.snapshot.queryParamMap.get('keyword');
    if (this.keyword !== null) {
      this.productService.searchProduct(this.keyword).then(products => {
        this.listProduct = products;
      });
    } else if(this.route.params != undefined){
      this.route.params.subscribe(async params => {
        console.log("params:" +params);
        const id = params['productId'];
        if(id != undefined){
          var list : Product[] = [];
          let token:string = sessionStorage.getItem("access_token") ?? "";
            if(await this.authenticationService.getCategoriesById(token, id) != null){
              let categories = this.authenticationService.getCategoriesById(token, id);
              categories.then((data) =>{
                var productIds = data.products;
                this.listProduct = [];
                for(var i = 0; i<productIds.length; i++){
                  this.productService.getProductById(productIds[i].id).then(prod => { 
                    // console.log(prod);
                    this.listProduct.push(prod);
                  });
                }
              }) 
            }
          // this.listProduct = list;
        } 
        else {
          this.productService.getAllProduct().then(products => {
            this.listProduct = products;
          });
        }
     });
    } 
  }

  async ajouter(product:Product){
    if(product != null){
      let panier = sessionStorage.getItem("panier");
      if(panier != null){
        var paniers = JSON.parse(panier);
        var products = paniers['products'];
        products.push(product);
        sessionStorage.setItem("panier", JSON.stringify(paniers));
        alert("Le produit de référence " +product.id+" est ajouté au panier");
      }
    }
  }
    // if(productId != null){
    //   let panier = sessionStorage.getItem("panier");
    //   if(panier != null){
    //     var paniers = JSON.parse(panier);
    //     var products = paniers['products'];
    //     products[productId] = 1;
    //     paniers['products'] = products;
    //     sessionStorage.setItem("panier", JSON.stringify(paniers));
    //   }
    //   alert("Le produit de référence " +productId+" est ajouté au panier");
    // }
    // console.log(productId);
  // }


}
