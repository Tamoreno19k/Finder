import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({
    items: []
  })

  constructor() { }

  addToCart(newItem: CartItem): void {
    const items = [...this.cart.value.items]

    const itemInCart = items.find(item => item.id === newItem.id)

    if(itemInCart) {
      itemInCart.quantity += 1
    } else {
      items.push(newItem)
    }
    this.cart.next({items})
    console.log(this.cart.value)
  }

  removeQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined
    let filteredItems: Array<CartItem> = this.cart.value.items.map(( _item: CartItem) => {
      if(_item.id === item.id) {
        _item.quantity--

        if(_item.quantity === 0) {
          itemForRemoval = _item
        }
      }
      return _item
    })
    if(itemForRemoval) {
      filteredItems = this.removeFromCart( itemForRemoval, false );
    }

    this.cart.next({items: filteredItems})
  }
  
  getTotal(items: Array<CartItem>) : number {
    return items.map(item => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0)
  }

  clearCart(): void {
    this.cart.next({
      items: []
    })
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems = this.cart.value.items.filter((_item: CartItem) => {
      return _item.id !== item.id
    })
    if(update) {
      this.cart.next({items: filteredItems})
    }

    return filteredItems
  }
}
