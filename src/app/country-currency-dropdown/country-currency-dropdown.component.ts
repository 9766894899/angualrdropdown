import { Component, OnInit } from '@angular/core';
import { CountryCurrencyService } from '../country-currency.service';

@Component({
  selector: 'app-country-currency-dropdown',
  templateUrl: './country-currency-dropdown.component.html',
  styleUrls: ['./country-currency-dropdown.component.css']
})
export class CountryCurrencyDropdownComponent implements OnInit {
  countryCurrencyData: any[] = [];
  filteredData: any[] = [];
  searchTerm: string = '';
  selectedCurrency: any = null;

  constructor(private countryCurrencyService: CountryCurrencyService) {}

  ngOnInit(): void {
    this.countryCurrencyData = this.countryCurrencyService.getCountryCurrencyData();
    this.filteredData = this.countryCurrencyData;
  }

  onSearchChange(searchTerm: string) {
    if (!searchTerm) {
      this.filteredData = this.countryCurrencyData;
    } else {
      this.filteredData = this.countryCurrencyData.filter(item =>
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.currency.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  selectCurrency(currency: any) {
    this.selectedCurrency = currency;
  }

  getSelectedCurrencyText() {
    if (this.selectedCurrency) {
      return `${this.selectedCurrency.currency}`;
    }
    return 'Select Currency';
  }

  getSelectedCurrencyCode(){
    return this.selectedCurrency.currency;
  }
}
