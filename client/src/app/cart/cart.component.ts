import { Component, OnInit,OnChanges  } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CartService } from '../services/cart.service';
import 'rxjs/add/operator/switchMap';
import {AuthenticationService} from '../authentication.service';
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
 
  constructor(private restangular: Restangular,private cartService: CartService,private auth: AuthenticationService ) { }
  cartItems;
  public total: number = 0;
  ngOnInit(){
   
    // for(var i=0;i<this.cartItems.length;i++){
    //     this.total += this.cartItems[i].price * this.cartItems[i].quantity; 
    // }
    this.auth.getCartItems().subscribe(cart => this.cartItems = cart);

  }

  placeorder(event,c) {
  //  console.log(c[0].id);
      
  }
  
    ngOnChanges(){

    }

  deleteitem(event: any, item: any) {
    
    this.auth.deleteCartItem(item._id)
      .subscribe(response => {
        let status = response.status;
        //alert(`the response is : ${response.body.name}`);
        console.log(response);
        this.auth.getCartItems().subscribe(cart => this.cartItems = cart);

      }, error => {
        alert(`Error is : ${error.error.message}`);
        console.log(error);
      })
   
  }
  
}
