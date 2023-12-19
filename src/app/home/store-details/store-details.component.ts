import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
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
    private cartService: CartService,
    private toastController: ToastController
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

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Item añadido correctamente',
      duration: 800,
      position: position,
    });

    await toast.present();
  }

  onAddCart(product: Product): void {
    this.cartService.addToCart({
      id: product._id,
      urlImage: product.urlImage,
      name: product.name,
      price: product.price,
      quantity: 1
    })
    this.presentToast('top')
  }

}
