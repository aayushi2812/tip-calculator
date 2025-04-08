import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { logo } from "../../public/logo.svg";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppComponent {

  bill: number = 0;
  tipPercentage: number = 5;
  customTip = 0;
  people: number = 1;
  
  get tipAmount(): number {
    return (this.bill * (this.customTip || this.tipPercentage) / 100) / this.people;
  }

  get total(): number {
    return (this.bill / this.people) + this.tipAmount;
  }
  
  reset(): void {
    this.bill = 0;
    this.tipPercentage = 15;
    this.customTip = 0;
    this.people = 1;
  }
  
}
