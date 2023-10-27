import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { LazymoduleComponent } from './lazymodule.component';
import { BootstrapService } from './services';
import { LazyState } from './states';

@NgModule({
  declarations: [
    LazymoduleComponent
  ],
  imports: [
    CommonModule,
    NgxsModule.forFeature([LazyState]),
    NgxsReduxDevtoolsPluginModule,
  ],
  providers: [
    BootstrapService
  ],
  exports: [
    LazymoduleComponent
  ]
})
export class LazymoduleModule { }
