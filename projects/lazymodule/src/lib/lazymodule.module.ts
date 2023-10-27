import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazymoduleComponent } from './lazymodule.component';
import { BootstrapService } from './services';

@NgModule({
  declarations: [
    LazymoduleComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    BootstrapService
  ],
  exports: [
    LazymoduleComponent
  ]
})
export class LazymoduleModule { }
