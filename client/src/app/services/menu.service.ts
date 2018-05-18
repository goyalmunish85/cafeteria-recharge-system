import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map'

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { ok } from 'assert';
@Injectable()
export class MenuService {

  constructor(private restangular: Restangular,private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }
    getItems(type: any): Observable<Item[]> {
      return  this.http.get(baseURL + 'api/items/menu/'+ type)
                      .map(res => { return this.processHTTPMsgService.extractData(res); })
                      .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
  
  getItem(id: number): Observable<Item> {
    return  this.restangular.one('dishes',id).get();
  }    
}
