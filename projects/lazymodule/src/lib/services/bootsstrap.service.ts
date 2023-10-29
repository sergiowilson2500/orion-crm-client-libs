import { createNgModule, Injectable, Injector, ViewContainerRef } from "@angular/core";
import { IAsLazyLoadedModule, LoadTypeKey } from "../types";
import { LazyLoadBroker, AsTypeOf } from "../utils";

export declare interface NgModuleOfType<T> extends Function { new(...args: any[]): T; }

@Injectable()
export class BootstrapService {
  constructor(private readonly injector: Injector) { }

  async bootstrapComponentByKey(key: LoadTypeKey, container: ViewContainerRef) {
    switch (key) {
      case LazyLoadBroker.Financial: {
        const { DashboardFinancialsModule } = await import('@mods/dashboards/financials/dashboard-financials.module');
        this.loadComponent(DashboardFinancialsModule, container);

        break;
      }
      case LazyLoadBroker.MarketSummary: {
        const { DashboardMarketSummaryModule } = await import('@mods/dashboards/market-summary/dashboard-market-summary.module');
        this.loadComponent(DashboardMarketSummaryModule, container);
        break;
      }

    }
  }

  loadComponent<TModule>(ngModule: NgModuleOfType<TModule>, container: ViewContainerRef) {
    const moduleRef = createNgModule(ngModule, this.injector);
    const component = AsTypeOf<IAsLazyLoadedModule>(moduleRef.instance).boostrapComponent();
    container.clear();
    container.createComponent(component, { ngModuleRef: moduleRef });
  }



}
