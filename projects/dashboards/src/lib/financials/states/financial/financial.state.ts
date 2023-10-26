import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { IFinancialStateModel } from './financial.model';
import { FinancialStateActions } from './financial.actions';
import { Injectable } from '@angular/core';


@State<IFinancialStateModel>({
  name: 'financial',
  defaults: <IFinancialStateModel>{
    loading: false,
    working: false,
  }
})
@Injectable()
export class FinancialState {

  constructor(private readonly httpClient: HttpClient) { }

  @Selector()
  static IsLoading(state: IFinancialStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static IsWorking(state: IFinancialStateModel): boolean {
    return state.working;
  }
 

  @Action(FinancialStateActions.Working)
  onWorking(ctx: StateContext<IFinancialStateModel>) {
    ctx.patchState({
      working: false
    });
  }

  @Action(FinancialStateActions.Loading)
  onLoading(ctx: StateContext<IFinancialStateModel>) {
    ctx.patchState({
      loading: true
    });
  }

  @Action(FinancialStateActions.Done)
  onDone(ctx: StateContext<IFinancialStateModel>) {
    ctx.patchState({
      loading: false,
      working: false
    })
  }


}
