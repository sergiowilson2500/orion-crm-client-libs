import { LazyLoadedComponentParamUpdate } from "./lazy.model";

export namespace LazyStateActions {

  export class InitializeParam {
    static readonly type = '[Lazy] Set As Done';
    constructor(public readonly param: LazyLoadedComponentParamUpdate) { }
  }

}

