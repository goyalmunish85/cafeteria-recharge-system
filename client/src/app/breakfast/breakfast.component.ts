import { Component, OnInit,Inject } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {


  breakfastItems;
  errMess: string;
 
  constructor(private dishService: MenuService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getItems('breakfast')
    .subscribe(breakfastItems => this.breakfastItems = breakfastItems);
  }
}
