import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Orders } from '../constants/order-constants';
import {Cart } from '../shared/cart';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/map'
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
@Injectable()
export class CartService {

  constructor(private restangular: Restangular,
    private processHTTPMsgService: ProcessHttpmsgService,private http: Http) { }

    getCartItems(): Observable<Cart[]> {

      return this.restangular.all('cart').getList();
  }

  getCartItem(id: number): Observable<Cart> {
    return  this.restangular.one('cart',id).get();
  }
  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  login(Cart): Observable<Response> {
    return this.http.post('localhost:3000/user/signin', Cart, { headers: this.getHeaders() });
  }
}
