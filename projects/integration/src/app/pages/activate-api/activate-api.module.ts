
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getComponents, getProviders } from './components/all';
import { getAllModulePages } from './pages/all';
import { ActivateApiRoutingModule } from './activate-api.routing.module';
import { ActivateApiComponent } from './activate-api.component';
import { MaterialComponentsModule } from '../../modules/material/material.module';
import { LazymoduleModule } from '@mods/lazy/index';
import { ApiLikeService } from './services';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [
    ActivateApiComponent,
    ...getComponents(),
    ...getAllModulePages()
  ],
  providers: [
    ApiLikeService,
    ...getProviders()
  ],
  imports: [
    CommonModule,
    ActivateApiRoutingModule,
    MaterialComponentsModule,
    NgxJsonViewerModule,
    LazymoduleModule
  ],

})
export class ActivateApiModule { }
