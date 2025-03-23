import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    const currentCart = this.cartSubject.getValue();
    currentCart.push(product);
    this.cartSubject.next(currentCart);
  }

  removeFromCart(productId: number): void {
    const currentCart = this.cartSubject.getValue().filter(product => product.id !== productId);
    this.cartSubject.next(currentCart);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }
}
