import { LoadTypeKey } from "../../types";

type LazyLoadedParams = { [key in LoadTypeKey]: any }
export type LazyLoadedComponentParam = LazyLoadedParams | null;
export type LazyLoadedComponentParamUpdate = Partial<LazyLoadedParams>;

export interface ILazyStateModel {
  params: LazyLoadedComponentParam;
 }
