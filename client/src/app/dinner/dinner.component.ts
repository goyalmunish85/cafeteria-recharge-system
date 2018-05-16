import { Component, OnInit,Inject } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {


  dinnerItems;
  errMess: string;
 
  constructor(private dishService: MenuService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getItems('dinner')
    .subscribe(dinnerItems => this.dinnerItems = dinnerItems);
  }
}
