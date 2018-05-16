import { Component, OnInit,OnChanges  } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CartService } from '../services/cart.service';
import 'rxjs/add/operator/switchMap';


import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges  {
 
  constructor(private restangular: Restangular,private cartService: CartService ) { }
  cartItems;
  public total: number = 0;
  ngOnInit(){
   
    // for(var i=0;i<this.cartItems.length;i++){
    //     this.total += this.cartItems[i].price * this.cartItems[i].quantity; 
    // }
    this.loaddata();
  }

  placeorder(event,c) {
  //  console.log(c[0].id);
      this.restangular.all('orders').customPOST({"item": this.cartItems});
      
      for(var i=0;i<c.length;i++){
        this.restangular.one('cart',c[i].id).remove();
      }
  }
  loaddata(){
    this.cartService.getCartItems().subscribe(cartItems => this.cartItems = cartItems);
  }
    ngOnChanges(){

    }

  deleteitem(event: any, p: any) {
    
    this.restangular.one('cart',p.id).remove();
    this.loaddata();
  }
  
}
