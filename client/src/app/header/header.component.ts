import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { CartService } from '../services/cart.service';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hide=true;
  constructor(private http: Http,private cartService: CartService,public auth: AuthenticationService) {}
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  ngOnInit() {
  }
  credentials;
  result;
  pizzas;
  errMess;
 
}
