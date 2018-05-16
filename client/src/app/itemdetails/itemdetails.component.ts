
import { Component, OnInit, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';

import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/operator/switchMap';
import { Item } from '../shared/item';
import { MenuService} from '../services/menu.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

    item: Item;
    addToCartForm: FormGroup;
    
    createForm(){
      this.addToCartForm = this.fb.group({
        quantity: 1,
        orderdescription:''
      });
    }
    constructor(private restangular: Restangular,private fb: FormBuilder,private dishservice: MenuService, private route: ActivatedRoute,
      @Inject('BaseURL') private BaseURL) {
        this.createForm();
    }
  
    ngOnInit() {
       this.route.params
      .switchMap((params: Params) => { return this.dishservice.getItem(+params['id']); })
      .subscribe(item => { this.item = item});
    }
    addToCart(event): Observable<Item> {
      this.item.id += 1;
      let atocart = Object.assign(this.addToCartForm.value ,this.item);
     
      return this.restangular.all('cart').customPOST(atocart);
    }
}
