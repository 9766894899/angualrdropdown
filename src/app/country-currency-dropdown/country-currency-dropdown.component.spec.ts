import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCurrencyDropdownComponent } from './country-currency-dropdown.component';

describe('CountryCurrencyDropdownComponent', () => {
  let component: CountryCurrencyDropdownComponent;
  let fixture: ComponentFixture<CountryCurrencyDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryCurrencyDropdownComponent]
    });
    fixture = TestBed.createComponent(CountryCurrencyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
