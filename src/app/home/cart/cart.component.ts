import { Component, Directive, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent  implements OnInit {

  cart: Cart = {
    items: [
      { id: '565512', urlImage: 'https://placehold.co/150x200', name: 'snikers', price: 150, quantity: 1 },
      { id: '1859', urlImage: 'https://placehold.co/150x200', name: 'puma', price: 175, quantity: 3 },
    ]
  }

  cartData!: CartItem[]

  displayedColums: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cartService.cart.subscribe((cart: Cart) => {
      this.cart = cart
      this.cartData = this.cart.items
    })
    console.log(this.cartService.cart.value)
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items)
  }

  onClearCart(): void {
    this.cartService.clearCart()
  }

  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item)
  }
}
