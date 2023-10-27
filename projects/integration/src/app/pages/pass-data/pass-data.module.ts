
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAllModuleComponents } from './components/all';
import { getAllModulePages } from './pages/all';
import { PassDataRoutingModule } from './pass-data.routing.module';
import { MaterialComponentsModule } from '../../modules/material/material.module';
import { LazymoduleModule } from '@mods/lazy/index';
import { PassDataComponent } from './pass-data.component';

@NgModule({
  declarations: [
    PassDataComponent,
    ...getAllModuleComponents(),
    ...getAllModulePages()
  ],
  imports: [
    CommonModule,
    PassDataRoutingModule,
    MaterialComponentsModule,
    LazymoduleModule
  ],

})
export class PassDataModule { }
