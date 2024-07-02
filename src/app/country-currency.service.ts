import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryCurrencyService {

  constructor() { }

  getCountryCurrencyData() {
    return [
      { country: 'United States', currency: 'USD', symbol: '$', code: 'us' },
      { country: 'Canada', currency: 'CAD', symbol: 'CA$', code: 'ca' },
      { country: 'United Kingdom', currency: 'GBP', symbol: '£', code: 'gb' },
      { country: 'Australia', currency: 'AUD', symbol: 'A$', code: 'au' },
      { country: 'Japan', currency: 'JPY', symbol: '¥', code: 'jp' },
      { country: 'India', currency: 'INR', symbol: '₹', code: 'in' },
      { country: 'Germany', currency: 'EUR', symbol: '€', code: 'de' },
      { country: 'France', currency: 'EUR', symbol: '€', code: 'fr' },
      { country: 'China', currency: 'CNY', symbol: '¥', code: 'cn' },
      { country: 'Brazil', currency: 'BRL', symbol: 'R$', code: 'br' }
    ];
  }
}
