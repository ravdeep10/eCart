import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl + '/products';
  constructor(private http : HttpClient) { }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }
  addToCart(product: Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
    
  }
}
