import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-dashboard',
  templateUrl: './shopping-dashboard.component.html',
  styleUrls: ['./shopping-dashboard.component.scss']
})
export class ShoppingDashboardComponent implements OnInit {

  constructor() {
    console.log('ShoppingDashboardComponent...');
   }

  ngOnInit() {
  }

}
