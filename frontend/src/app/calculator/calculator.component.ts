import { Component, OnInit } from '@angular/core';
import {Currency} from "../currency";
import {CurrencyService} from "../currency.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currencies: Currency[];
  calculator = new Currency();
  submitted = false;

  constructor(private currencyService: CurrencyService,
              private location: Location) { }

  ngOnInit(): void {
    this.getSalary();
  }

  newSalary(): void {
    this.submitted = false;
    this.calculator = new Currency();
  }

  addSalary() {
    this.submitted = true;
    this.save();
  }

  getSalary() {
    return this.currencyService.getCurrencies()
      .subscribe(
        currencies => {
          console.log(currencies);
          this.currencies = currencies;
        }
      );
  }

  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.Id); // You get the Id of the selected item here
  }

  refresh(): void {
    window.location.reload();
  }

  private save(): void {
    console.log(this.calculator);
    this.currencyService.addCurrency(this.calculator)
      .subscribe();
  }

}
