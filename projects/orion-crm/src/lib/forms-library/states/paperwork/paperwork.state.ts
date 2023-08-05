import { Store, State, Selector, StateContext, Action } from '@ngxs/store';
import { IPaperworkStateModel } from './paperwork.model';
import { PaperworkActions } from './paperwork.actions';
import { tap, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ApiService, PaperworkService } from '../../services';
import { AuthState } from '../auth/auth.state';
import { EMPTY } from 'rxjs';
import { PaperworkAssignment } from '@libShared/models';
import { saveAs } from 'file-saver';
import { MatXtndSnackbarSuccessService } from '@ngjoy/mat-xtnd';


@State<IPaperworkStateModel>({
  name: 'paperwork',
  defaults: <IPaperworkStateModel>{
    busyId: '',
    loading: true,
    records: [],
    paperworkAssignments: []
  }
})
@Injectable()
export class PaperworkState {

  constructor(
    private readonly paperworkService: PaperworkService,
    private readonly store: Store,
    private readonly snackbarService: MatXtndSnackbarSuccessService 
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

  @Selector()
  static getBusyId(state: IPaperworkStateModel): string {
    return state.busyId;
  }

  @Action(PaperworkActions.Done)
  onDone(ctx: StateContext<IPaperworkStateModel>) {
    ctx.patchState({
      loading: false,
      busyId: ''
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

  @Action(PaperworkActions.SetBusyId)
  onBusyId(ctx: StateContext<IPaperworkStateModel>, action: PaperworkActions.SetBusyId) {
    const { id: busyId } = action;
    ctx.patchState({ busyId })
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

  @Action(PaperworkActions.DownloadPaperwork)
  onDownloadPaperwork(ctx: StateContext<IPaperworkStateModel>, action: PaperworkActions.DownloadPaperwork) {
    const repId = this.store.selectSnapshot(AuthState.getOrionRepId);
    if (!repId) {
      return EMPTY;
    }

    return ctx.dispatch(new PaperworkActions.SetBusyId(action.request.templateIds[0])).pipe(
      mergeMap(() => this.paperworkService.downloadPaperwork(action.request.templateIds, repId)),
      tap(response => {
        const blob = new Blob([response.body], { type: response.headers.get('Content-Type') });
        saveAs(blob, response.headers.get("Content-FileName"));
        this.snackbarService.Open('Paperwork Downloaded Successfully');
      }),
      mergeMap(() => ctx.dispatch(new PaperworkActions.Done()))
    )

    
  }


}
