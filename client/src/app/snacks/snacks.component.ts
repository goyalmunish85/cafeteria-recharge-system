import { Component, OnInit,Inject } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

    snacksItems;
  errMess: string;
 
  constructor(private dishService: MenuService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getItems('snacks')
    .subscribe(snacksItems => this.snacksItems = snacksItems);
  }

}
