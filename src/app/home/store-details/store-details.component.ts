import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.scss'],
})
export class StoreDetailsComponent  implements OnInit {

  products!: Product[]
  storeId!: string | null

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const idStore = params['storeId']
      this.storeId = idStore
    })
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data.allProducts.filter((productos: Product) => {
        return productos.storeId === this.storeId
      })
    })
  }

}
