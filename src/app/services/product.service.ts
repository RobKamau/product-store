import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';  // Import the Product model

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; // The FakeStore API URL

  constructor(private http: HttpClient) {}

  // Get all products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Add a new product
  addProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, newProduct);  // Sends POST request to API
  }
}