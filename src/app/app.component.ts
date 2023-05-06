import { Component, OnInit } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'currency-converter';
  currjson: any = [];

  from = 'USD';
  to = 'USD';
  result: any;
  symbols : any= [];
  symbolsObj: any = {};

  constructor(
    private currency: CurrencyapidataService
  ){}

  ngOnInit(): void {
    // this.convert();
    this.getSymbols();
  }

  convert(){
    this.currency.getcurrencydata(this.from, this.to).subscribe(data =>{
      console.log(data);
      this.result = data;
    });
  }

  getSymbols() {
    this.currency.getSymbols().subscribe((data: any) =>{
      console.log(data);
      this.symbolsObj = data.symbols;
      this.symbols = Object.keys(data.symbols);
    });
  }
}
