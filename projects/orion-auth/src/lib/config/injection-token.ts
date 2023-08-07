import { InjectionToken } from "@angular/core";

export const ORION_CRM_AUTH_TOKEN_KEY = 'ORION_CRM_TOKEN_KEY';

export interface OrionAuthConfiguration {
  storageKey?: string;
  cryptoKey?: string;
  development?: boolean;
}

export const orionCrmAuthDefaults: Partial<OrionAuthConfiguration> = {
  storageKey: 'ops_lu',
  development: false,
  cryptoKey: '9op238s7'
}

export const ORION_CRM_TOKEN = new InjectionToken<OrionAuthConfiguration>(ORION_CRM_AUTH_TOKEN_KEY);
