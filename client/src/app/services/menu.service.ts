import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class MenuService {

  constructor(private restangular: Restangular,
              private processHTTPMsg: ProcessHttpmsgService) { }

  getItems(c: string): Observable<Item[]> {
    return this.restangular.all('dishes').getList({category : c});
  }
  getItem(id: number): Observable<Item> {
    return  this.restangular.one('dishes',id).get();
  }    
}
