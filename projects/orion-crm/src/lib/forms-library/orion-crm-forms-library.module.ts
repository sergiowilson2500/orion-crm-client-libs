import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { CryptoService } from '@libShared/services';
import { OrionCrmUnauthorizedComponent } from './components';
import { formsLibraryConfig, formsLibraryDefaulConfiguration, FORMS_LIBRARY_CONFIG } from './configs/injection-token';
import { OrionCrmFormsLibraryComponent } from './orion-crm-forms-library.component';
import { getStates } from './states/all';
import { ApiService, PaperworkService } from './services';
import { CommonModule } from '@angular/common';
import { MatXtndModule } from '@ngjoy/mat-xtnd';
import { MaterialComponentsModule } from '../internal-modules/material.module';

@NgModule({
  declarations: [
    OrionCrmFormsLibraryComponent,
    OrionCrmUnauthorizedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([...getStates()]),
    NgxsReduxDevtoolsPluginModule,
    MatXtndModule,
    MaterialComponentsModule
  ],
  exports: [
    OrionCrmFormsLibraryComponent
  ],
  providers: [
    ApiService,
    PaperworkService
  ]
})
export class OrionCrmFormsLibraryModule {
  static forRoot(configuration: formsLibraryConfig): ModuleWithProviders<OrionCrmFormsLibraryModule> {
    const config = { ...formsLibraryDefaulConfiguration, ...configuration };
    return {
      ngModule: OrionCrmFormsLibraryModule,
      providers: [
        { provide: FORMS_LIBRARY_CONFIG, useValue: { ...config} },
        { provide: CryptoService, useClass: CryptoService, useFactory: () => new CryptoService(config!.cryptoKey!) },
       
      ]
    };
  }

}
