import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { IFinancialStateModel } from './financial.model';
import { FinancialStateActions } from './financial.actions';
import { Injectable } from '@angular/core';
import { delay, mergeMap, tap } from 'rxjs';


@State<IFinancialStateModel>({
  name: 'financial',
  defaults: <IFinancialStateModel>{
    loading: true,
    working: false,
  }
})
@Injectable()
export class FinancialState {

  static readonly Delay = 2000;

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

  @Action(FinancialStateActions.Initialize)
  onInitialize(ctx: StateContext<IFinancialStateModel>) {
    return ctx.dispatch(new FinancialStateActions.Loading()).pipe(
      delay(FinancialState.Delay),
      mergeMap(() => ctx.dispatch(new FinancialStateActions.Done()))
    )
  }


}
