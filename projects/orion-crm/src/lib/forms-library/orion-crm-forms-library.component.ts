import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { filter, mergeMap, Observable } from 'rxjs';
import { PaperworkAssignment } from '../shared/models';
import { PaperworkActions } from './states/paperwork/paperwork.actions';
import { PaperworkState } from './states/paperwork/paperwork.state';
import { AuthActions, AuthState } from '@ngjoy/orion-auth'

@Component({
  selector: 'orion-crm-forms-library',
  templateUrl: 'orion-crm-forms-library.component.html',
  styleUrls: [`orion-crm-forms-library.component.scss`],

})
export class OrionCrmFormsLibraryComponent implements OnInit {

  @Select(AuthState.IsAuthenticated) authenticated$: Observable<boolean> | undefined;
  @Select(PaperworkState.IsLoading) loading$: Observable<boolean> | undefined;
  @Select(PaperworkState.getPaperworkAssignments) items$: Observable<PaperworkAssignment[]> | undefined;
  @Select(PaperworkState.getBusyId) busyId$: Observable<string> | undefined;
 
  listColumns = ['TemplateName', 'Action'];

  constructor(
    private readonly store: Store
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new AuthActions.UpdateAuthStatus());


    this.store.select(AuthState.IsAuthenticated).pipe(
      filter(isAuthenticated => isAuthenticated),
      mergeMap(() => this.store.dispatch(new PaperworkActions.GetElementsByRep()))
    ).subscribe();

  }

  donwload(item: PaperworkAssignment) {
    if (item.paperworkTemplateId) {
      const templateIds: Array<string> = [item.paperworkTemplateId];
      this.store.dispatch(new PaperworkActions.DownloadPaperwork({ templateIds }));
    }
  }


} 
