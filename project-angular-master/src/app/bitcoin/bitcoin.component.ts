import { Component, OnInit } from '@angular/core';
// Importando HTTP Client
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  currentPrice: Response;
  lastUpdate: Date;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
update() {
  this.http.get<Response>('https://api.coindesk.com/v1/bpi/currentprice.json')
  .subscribe(data => {
    this.lastUpdate = new Date();
    this.currentPrice = data;
  });
}
