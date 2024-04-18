import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
cartItems : Product[]= [];
totalPrice : number = 0;
  constructor(private cartService : CartService) { }
  ngOnInit(): void {
     this.cartService.getCartItems().subscribe(data =>{
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }
  getTotalPrice(){
    let total = 0;
    this.cartItems.forEach(item =>{
      total += item.price;
    });
    return total;
  }
  clearCart(){
    this.cartService.clearCart().subscribe(()=>{
      this.cartItems = [];
      this.totalPrice = 0;

    })
  }
  checkout(){
    this.cartService.checkout(this.cartItems).subscribe();
  }
  
}
