import { Component, OnInit } from '@angular/core';
import { Product } from '../service/mapping/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  listProduct: Product[] = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProduct().then(products => {
      this.listProduct = products;
    });
  }
}
