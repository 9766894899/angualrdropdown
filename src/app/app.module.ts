import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryCurrencyDropdownComponent } from './country-currency-dropdown/country-currency-dropdown.component';
// import { CountryCurrencyService } from './services/country-currency.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CountryCurrencyService } from './country-currency.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryCurrencyDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [CountryCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
