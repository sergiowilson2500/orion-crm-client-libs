import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { IPaperworkStateModel } from './paperwork.model';
import { PaperworkActions } from './paperwork.actions';
import { tap, timeout, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiService, PaperworkService } from '../../services';
import { AuthState } from '../auth/auth.state';
import { EMPTY } from 'rxjs';
import { PaperworkAssignment } from '@libShared/models';


@State<IPaperworkStateModel>({
  name: 'paperwork',
  defaults: <IPaperworkStateModel>{
    loading: true,
    records: [],
    paperworkAssignments: []
  }
})
@Injectable()
export class PaperworkState {

  constructor(
    private readonly paperworkService: PaperworkService,
    private readonly store: Store
  ) { }

  @Selector()
  static IsLoading(state: IPaperworkStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static getItems(state: IPaperworkStateModel): any[] {
    return state.records;
  }

  @Selector()
  static getPaperworkAssignments(state: IPaperworkStateModel): PaperworkAssignment[] {
    return state.paperworkAssignments;
  }

  @Action(PaperworkActions.Done)
  onDone(ctx: StateContext<IPaperworkStateModel>) {
    ctx.patchState({
      loading: false
    });
  }
  @Action(PaperworkActions.Loading)
  onLoading(ctx: StateContext<IPaperworkStateModel>) {
    ctx.patchState({
      loading: true
    });
  }

  @Action(PaperworkActions.GetElementsByRep)
  onGetElementsByRep(ctx: StateContext<IPaperworkStateModel>) {
    const repId = this.store.selectSnapshot(AuthState.getRepId);
    if (repId) {
      return ctx.dispatch(new PaperworkActions.Loading()).pipe(
        mergeMap(() => this.paperworkService.getAllPaperworkAssignmentsByRep(repId)),
        tap(records => ctx.patchState({ records })),
        mergeMap(() => ctx.dispatch(
          [
            new PaperworkActions.AggragateList(),
            new PaperworkActions.Done()
          ]
        )
        )
      )
    }
    return EMPTY;

  }

  @Action(PaperworkActions.AggragateList)
  onAggragateList(ctx: StateContext<IPaperworkStateModel>) {
    const { records } = ctx.getState();

    const custodians = records[0].custodians.map(custodian => ({ id: custodian.id, orionId: custodian.orionId, name: custodian.name }));
    const regsitrationTypes = records[0].registrationTypes.map(item => ({ id: item.id, name: item.name, custodianId: item.custodianId, orionRegistrationTypeId: item.orionRegistrationTypeId }));

    let paperworkAssignments: Array<PaperworkAssignment> = [];
    records.filter(_ => !_.formsLibraryUnauthorizedCustodian).forEach(_ => {

      if (!paperworkAssignments.some(item => item.paperworkTemplateId === _.paperworkTemplateId)) {
        paperworkAssignments.push(_);
      }
    });

    ctx.patchState({ paperworkAssignments });

  }


}
