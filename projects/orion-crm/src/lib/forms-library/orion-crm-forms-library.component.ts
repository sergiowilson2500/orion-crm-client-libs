import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Select, Store } from '@ngxs/store';
import { filter, map, mergeMap, Observable, tap } from 'rxjs';
import { PaperworkAssignment } from '../shared/models';
import { AuthActions } from './states/auth/auth.actions';
import { AuthState } from './states/auth/auth.state';
import { PaperworkActions } from './states/paperwork/paperwork.actions';
import { PaperworkState } from './states/paperwork/paperwork.state';

@Component({
  selector: 'orion-crm-forms-library',
  templateUrl: 'orion-crm-forms-library.component.html',
  styleUrls: [`orion-crm-forms-library.component.scss`]
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
