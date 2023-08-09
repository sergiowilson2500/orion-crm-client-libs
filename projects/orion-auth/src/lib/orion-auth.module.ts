import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { OrionAuthConfiguration, orionCrmAuthDefaults, ORION_CRM_TOKEN } from './config';
import { CryptoService } from './services';
import { AuthState } from './states';

@NgModule({
  imports: [
    NgxsModule.forFeature([AuthState]),
    NgxsReduxDevtoolsPluginModule,
  ]
})
export class OrionAuthModule {
  static forRoot(configuration?: OrionAuthConfiguration): ModuleWithProviders<OrionAuthModule> {
    const config = { ...orionCrmAuthDefaults, ...configuration };
    return {
      ngModule: OrionAuthModule,
      providers: [
        { provide: ORION_CRM_TOKEN, useValue: { ...config } },
        { provide: CryptoService, useClass: CryptoService, useFactory: () => new CryptoService(config!.cryptoKey!) },
      ]
    }
  }
}
