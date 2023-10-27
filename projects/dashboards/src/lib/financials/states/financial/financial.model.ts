

export interface IFinancialStateModel {
  loading: boolean;
  working: boolean;
  boostrapParams: financialBootstrapParams | null
}

export type financialBootstrapParams = { id: number };
