import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  currentUser: User | null = null;
  newProduct: Product = { id: 0, title: '', price: 0, description: '', image: '', category: '' };

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {
    this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  addProduct(): void {
    if (this.currentUser) {
      this.productService.addProduct(this.newProduct).subscribe();
    } else {
      // Handle unauthenticated users
    }
  }
}