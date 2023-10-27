import { Component } from '@angular/core';
import { LazyLoadBroker } from '@mods/lazy/index'
import { financialBootstrapParams } from '@mods/dashboards/financials/states';
import { Helpers } from '../../utils/helpers';

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: [`main.component.scss`]
})
export class MainComponent {

  keyForFinancial = LazyLoadBroker.Financial;
  keyForMarketSummary = LazyLoadBroker.MarketSummary;

  data: financialBootstrapParams = {id: 55}

  update() {
    this.data = { id: Helpers.random() };
  }
} 
