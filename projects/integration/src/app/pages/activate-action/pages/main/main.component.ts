import { Component } from '@angular/core';
import { LazyLoadBroker, LoadTypeKey } from '@mods/lazy/index'

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: [`main.component.scss`]
})
export class MainComponent {

  keyForFinancial: LoadTypeKey | null = null;
  keyForMarketSummary: LoadTypeKey | null = null;


  lazy1() {
    this.keyForFinancial = LazyLoadBroker.Financial;
  }

  lazy2() {
    this.keyForMarketSummary = LazyLoadBroker.MarketSummary;
  }

} 
