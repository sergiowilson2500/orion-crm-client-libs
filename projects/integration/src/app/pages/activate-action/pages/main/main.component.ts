import { Component } from '@angular/core';
import { LazyLoadBroker } from '@mods/lazy/index'

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: [`main.component.scss`]
})
export class MainComponent {

  keyForFinancial = LazyLoadBroker.Financial;
  keyForMarketSummary = LazyLoadBroker.MarketSummary;

  display = {lazy1: false, lazy2: false}

  lazy1() {
    this.display.lazy1 = true;
  }

  lazy2() {
    this.display.lazy2 = true;
  }

} 
