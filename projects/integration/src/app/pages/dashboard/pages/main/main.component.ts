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
} 
