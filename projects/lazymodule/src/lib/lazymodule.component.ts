import { Component, createNgModule, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { LoadTypeKey } from './types';
import { LazyLoadBroker } from './utils';

@Component({
  selector: 'lazy-load',
  templateUrl: 'lazymodule.component.html',
  styleUrls: ['lazymodule.component.scss']
})
export class LazymoduleComponent implements OnInit {

  @Input() key: LoadTypeKey | null = null;
  @ViewChild("lazycontent", { read: ViewContainerRef, static: true })
  lazycontent!: ViewContainerRef;

  constructor(private readonly injector: Injector) { }

  async ngOnInit() {
    switch (this.key) {
      case LazyLoadBroker.Financial: {
        const { DashboardFinancialsModule } = await import('@mods/dashboards/financials/dashboard-financials.module');
        const moduleRef = createNgModule(DashboardFinancialsModule, this.injector);
        const component = moduleRef.instance.boostrapComponent();
        this.lazycontent.clear();
        this.lazycontent.createComponent(component, { ngModuleRef: moduleRef});
        break;
      }
      case LazyLoadBroker.MarketSummary: {
        const { DashboardMarketSummaryModule } = await import('@mods/dashboards/market-summary/dashboard-market-summary.module');
        const moduleRef = createNgModule(DashboardMarketSummaryModule, this.injector);
        const component = moduleRef.instance.boostrapComponent();
        this.lazycontent.clear();
        this.lazycontent.createComponent(component, { ngModuleRef: moduleRef });
        break;
      }

    }

  }

}
