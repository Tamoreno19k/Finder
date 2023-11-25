import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent  implements OnInit {

  products!: Product[]

  constructor(
    private http: HttpClient,
    private productServices: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadProducts()
  }

  loadProducts() {
    this.productServices.getAllProducts().subscribe(data => {
      console.log(data.allProducts)
      this.products = data.allProducts
    })
  }

}
