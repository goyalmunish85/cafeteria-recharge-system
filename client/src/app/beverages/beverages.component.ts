import { Component, OnInit,Inject } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {


  beveragesItems;
  errMess: string;
 
  constructor(private dishService: MenuService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getItems('beverages')
    .subscribe(beveragesItems => this.beveragesItems = beveragesItems);
  }
}
