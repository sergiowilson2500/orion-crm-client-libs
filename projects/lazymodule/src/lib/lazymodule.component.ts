import { Component, createNgModule, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { BootstrapService } from './services';
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

  constructor(
    private readonly boostrapService: BootstrapService) {}

  async ngOnInit() {
    if(this.key && this.lazycontent) {
      this.boostrapService.bootstrapComponentByKey(this.key, this.lazycontent);
    }
  }

}
