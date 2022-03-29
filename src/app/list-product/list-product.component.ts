import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../service/mapping/product';
import { ProductService } from '../service/product.service';

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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.keyword = this.route.snapshot.queryParamMap.get('keyword');
    if (this.keyword !== null) {
      this.productService.searchProduct(this.keyword).then(products => {
        this.listProduct = products;
      });
    } else {
      this.productService.getAllProduct().then(products => {
        this.listProduct = products;
      });
    }
  }
}
