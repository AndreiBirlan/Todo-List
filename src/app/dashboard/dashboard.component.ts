import { Component, OnInit } from '@angular/core';
import { GetCoinsService } from './get-coins.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  coins:any;

  constructor(private coinsData: GetCoinsService) { }

  ngOnInit(): void {
    this.coinsData.getCoins().subscribe(results => {
      this.coins = results;
    });
  }

}
