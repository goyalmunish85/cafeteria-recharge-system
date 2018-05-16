import { Component, OnInit, Inject } from '@angular/core';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: ['./whatsnew.component.css']
})
export class WhatsnewComponent implements OnInit {


  newItems;
  errMess: string;
 
  constructor(private dishService: MenuService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getItems('lunch')
    .subscribe(newItems => this.newItems = newItems);
  }
}
