import { InjectionToken } from "@angular/core";

export const FORMS_LIBRARY_CONFIG_TOKEN = 'FORMS_LIBRARY_CONFIG_TOKEN'

export interface formsLibraryConfig{
  api: string;
  storageKey?: string;
  cryptoKey?: string;
  development?: boolean;
} 

export const formsLibraryDefaulConfiguration: Partial<formsLibraryConfig> = {
  storageKey: 'ops_lu',
  development: false,
  cryptoKey: '9op238s7'
}

export const FORMS_LIBRARY_CONFIG = new InjectionToken<formsLibraryConfig>(FORMS_LIBRARY_CONFIG_TOKEN);
