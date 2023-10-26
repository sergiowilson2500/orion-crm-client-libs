import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazymoduleComponent } from './lazymodule.component';

@NgModule({
  declarations: [
    LazymoduleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LazymoduleComponent
  ]
})
export class LazymoduleModule { }
