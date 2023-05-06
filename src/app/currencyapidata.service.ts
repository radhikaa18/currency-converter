import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  API_KEY = 'Ph4PgZm1lUbuf0tFATOqF0H3qSeOHJmL';

  constructor(private http:HttpClient) {}

  getcurrencydata(from: string, to: string){
    let url =`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=1`
    return this.http.get(url, {headers: {
      apikey: this.API_KEY
    }});
  }


  getSymbols() {
    let url = `https://api.apilayer.com/exchangerates_data/symbols`;
    return this.http.get(url, {headers: {
      apikey: this.API_KEY
    }});
  }
}
