import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { ILazyStateModel, LazyLoadedComponentParam } from './lazy.model';
import { LazyStateActions } from './lazy.actions';
import { Injectable } from '@angular/core';
import { LoadTypeKey } from '../../types';

@State<ILazyStateModel>({
  name: 'lazy',
  defaults: <ILazyStateModel>{
    params: null,
  }
})
@Injectable()
export class LazyState {

  @Selector()
  static getParams(state: ILazyStateModel): LazyLoadedComponentParam {
    return state.params;
  }

  @Selector()
  static getParamByKey(state: ILazyStateModel): any | null {
    return (key: LoadTypeKey) => {
      return (state.params) ? state.params[key] : null;
    }
  }

  @Action(LazyStateActions.InitializeParam)
  onInitializeParams(ctx: StateContext<ILazyStateModel>, action: LazyStateActions.InitializeParam) {
    const { params: currentParams } = ctx.getState();
    const { param } = action;

    const mutateParams = (currentParams) ? { ...currentParams, ...param } : { ...param };
    const params = mutateParams as LazyLoadedComponentParam;

    ctx.patchState({ params });
  }

}
