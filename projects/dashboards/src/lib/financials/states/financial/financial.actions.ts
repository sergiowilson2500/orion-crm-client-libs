import { financialBootstrapParams } from "./financial.model";

export namespace FinancialStateActions {

  export class Loading {
    static readonly type = '[Financial] Set As Loading';
  }

  export class Working {
    static readonly type = '[Financial] Set As Working';
  }

  export class Done {
    static readonly type = '[Financial] Set As Done';
  }

  export class Initialize {
    static readonly type = '[Financial] Initialize';
  }

  export class UpdateParams {
    static readonly type = '[Financial] Update Params';
    constructor(public params: financialBootstrapParams) { }
  }
}
