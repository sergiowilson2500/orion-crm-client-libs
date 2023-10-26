
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatXtndModule } from '@ngjoy/mat-xtnd';
import { MaterialComponentsModule } from './modules/material/material.module';
import { DashboardMarketSummaryComponent } from './components';
import { IAsLazyLoadModuleOfBootstrapType } from '@mods/lazy/index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatXtndModule,
    MaterialComponentsModule
  ],
  declarations: [
    DashboardMarketSummaryComponent
  ],
  exports: [
    DashboardMarketSummaryComponent
  ]
})
export class DashboardMarketSummaryModule implements IAsLazyLoadModuleOfBootstrapType<DashboardMarketSummaryComponent>  {

  boostrapComponent() {
    return DashboardMarketSummaryComponent
  }
}
