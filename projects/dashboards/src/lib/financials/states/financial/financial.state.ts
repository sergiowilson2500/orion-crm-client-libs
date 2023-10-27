import { Store, State, Selector, StateContext, Action, NgxsOnInit } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { financialBootstrapParams, IFinancialStateModel } from './financial.model';
import { FinancialStateActions } from './financial.actions';
import { Injectable } from '@angular/core';
import { delay, filter, map, mergeMap, tap } from 'rxjs';
import { LazyState } from '@mods/lazy/states';
import { LazyLoadBroker } from '@mods/lazy/utils';


@State<IFinancialStateModel>({
  name: 'financial',
  defaults: <IFinancialStateModel>{
    loading: true,
    working: false,
    boostrapParams: null
  }
})
@Injectable()
export class FinancialState implements NgxsOnInit {

  static readonly BootstrapKey = LazyLoadBroker.Financial;
  static readonly Delay = 2000;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly store: Store
  ) { }

  ngxsOnInit(ctx: StateContext<any>): void {
    this.store.select(LazyState.getParamByKey).pipe(
      map(filterFunc => filterFunc(FinancialState.BootstrapKey)),
      filter(value => !!value),
      tap(params =>  ctx.dispatch(new FinancialStateActions.UpdateParams(params)) )
    ).subscribe();
  }

  @Selector()
  static IsLoading(state: IFinancialStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static IsWorking(state: IFinancialStateModel): boolean {
    return state.working;
  }

  @Selector()
  static getBootstrapParams(state: IFinancialStateModel): financialBootstrapParams | null {
    return state.boostrapParams;
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

  @Action(FinancialStateActions.UpdateParams)
  onUpdateParams(ctx: StateContext<IFinancialStateModel>, action: FinancialStateActions.UpdateParams) {
    const { params } = action;
    console.log(params);
    ctx.patchState({ boostrapParams: params})
  }


}
