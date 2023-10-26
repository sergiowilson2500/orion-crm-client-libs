import { NgModule } from '@angular/core';
import { DashboardFinancialsModule } from './financials';
import { DashboardMarketSummaryModule } from './market-summary';

@NgModule({
  imports: [
    DashboardFinancialsModule,
    DashboardMarketSummaryModule
  ],
  exports: [
    DashboardFinancialsModule,
    DashboardMarketSummaryModule
  ]
})
export class DashboardsModule { }
