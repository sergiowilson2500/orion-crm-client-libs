import { Component, createNgModule, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { BootstrapService } from './services';
import { LazyStateActions } from './states';
import { LoadTypeKey } from './types';
import { LazyLoadBroker } from './utils';

@Component({
  selector: 'lazy-load',
  templateUrl: 'lazymodule.component.html',
  styleUrls: ['lazymodule.component.scss']
})
export class LazymoduleComponent implements OnInit {

  private parameters: any = {};

  @Input() key: LoadTypeKey | null = null;
  @ViewChild("lazycontent", { read: ViewContainerRef, static: true })
  lazycontent!: ViewContainerRef;

  @Input()
  set params(value: any) {
    if (!!value && !!this.key) {
      this.parameters[this.key] = value;
      this.store.dispatch(new LazyStateActions.InitializeParam(this.parameters))
    }
  }
  get params() {
    return this.parameters;
  }

  constructor(
    private readonly boostrapService: BootstrapService,
    private readonly store: Store
  ) { }

  async ngOnInit() {
    if(this.key && this.lazycontent) {
      this.boostrapService.bootstrapComponentByKey(this.key, this.lazycontent);
    }
  }

}
