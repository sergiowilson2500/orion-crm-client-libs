import { Component } from '@angular/core';
import { LazyLoadBroker } from '@mods/lazy/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'integration';

  keyForFinancial = LazyLoadBroker.Financial;
  keyForMarketSummary = LazyLoadBroker.MarketSummary;
}
