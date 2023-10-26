
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllModuleComponents } from './components/all';
import { getAllModulePages } from './pages/all';
import { ActivateActionRoutingModule } from './activate-action.routing.module';
import { ActivateActionComponent } from './activate-action.component';
import { MaterialComponentsModule } from '../../modules/material/material.module';
import { LazymoduleModule } from '@mods/lazy/index';

@NgModule({
  declarations: [
    ActivateActionComponent,
    ...getAllModuleComponents(),
    ...getAllModulePages()
  ],
  imports: [
    CommonModule,
    ActivateActionRoutingModule,
    MaterialComponentsModule,
    LazymoduleModule
  ],

})
export class ActivateActionModule { }
