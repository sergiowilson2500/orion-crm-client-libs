
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllModuleComponents } from './components/all';
import { getAllModulePages } from './pages/all';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialComponentsModule } from '../../modules/material/material.module';
import { LazymoduleModule } from '@mods/lazy/index';

@NgModule({
  declarations: [
    DashboardComponent,
    ...getAllModuleComponents(),
    ...getAllModulePages()
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialComponentsModule,
    LazymoduleModule
  ],

})
export class DashboardModule { }
