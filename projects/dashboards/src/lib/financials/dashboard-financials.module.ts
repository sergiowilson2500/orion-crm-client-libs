
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatXtndModule } from '@ngjoy/mat-xtnd';
import { MaterialComponentsModule } from './modules/material/material.module';
import { getComponents } from './components/all';
import { DashboardFinancialComponent } from './components';
import { IAsLazyLoadModuleOfBootstrapType } from '@mods/lazy/index';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { FinancialState } from './states/financial/financial.state';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatXtndModule,
    MaterialComponentsModule,
    NgxsModule.forFeature([FinancialState]),
    NgxsReduxDevtoolsPluginModule,
  ],
  declarations: [
    ...getComponents()
  ],
  exports: [
    ...getComponents()
  ]
})
export class DashboardFinancialsModule implements IAsLazyLoadModuleOfBootstrapType<DashboardFinancialComponent> {

  boostrapComponent() {
    return DashboardFinancialComponent
  }
}
