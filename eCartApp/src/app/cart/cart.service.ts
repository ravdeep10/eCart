import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiCartUrl = environment.apiUrl + '/cart'; 
  private apiCheckoutUrl = environment.apiUrl + '/checkout'; 
  constructor(private http : HttpClient) { }

  addToCart(product: Product):Observable<Product>{
    return this.http.post<Product>(this.apiCartUrl, product);
  }
  getCartItems():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiCartUrl);
  }
  clearCart():Observable<any>{
    return this.http.delete(this.apiCartUrl);
  } 
  checkout(products: Product[]):Observable<any>{
    return this.http.post<void>(this.apiCheckoutUrl, products);
  }
}