import { Component, OnInit,Inject } from '@angular/core';
import { MenuService } from '../services/menu.service';
@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {


  lunchItems;
  errMess: string;
 
  constructor(private dishService: MenuService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getItems('lunch')
    .subscribe(lunchItems => this.lunchItems = lunchItems);
  }
}
