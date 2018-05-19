import { Component, OnInit,Inject } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Params, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { FormControl } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import {AuthenticationService} from '../authentication.service';
import { Cart } from '../shared/cart';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems;
  itype;
  cart: Cart;
  qty = 1;
  constructor(private router: Router, private fb: FormBuilder,
     private auth: AuthenticationService ,private route: ActivatedRoute,private menuService: MenuService,
    @Inject('BaseURL') private BaseURL) { }
  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.auth.getItems(params['type']))
    .subscribe(menuItems => this.menuItems = menuItems);
  }
  
  addToCart(event: any, item: any) {
    console.log(item._id);
    if(this.auth.isLoggedIn()){
      this.cart = {
        u_id : "",
        i_id : item._id,
        quantity: this.qty 
      }
      this.auth.addtocart(this.cart)
      .subscribe(response => {
        let status = response.status;
        //alert(`the response is : ${response.body.name}`);
        alert("Added Successfully");
       
      }, error => {
        alert(`Error is : ${error.error.message}`);
        console.log(error);
      })
    }
    else{
      alert("Please login first");
      this.router.navigate(['/login']);
    }
    
  }

}

