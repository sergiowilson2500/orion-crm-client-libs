import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { financialBootstrapParams } from '../../states';
import { FinancialStateActions } from '../../states/financial/financial.actions';
import { FinancialState } from '../../states/financial/financial.state';

@Component({
  selector: 'dashboard-financial',
  templateUrl: 'dashboard-financial.component.html',
  styleUrls: [`dashboard-financial.component.scss`]
})
export class DashboardFinancialComponent implements OnInit {

  @Select(FinancialState.IsLoading) loading$: Observable<boolean> | undefined;
  @Select(FinancialState.getBootstrapParams) bootstrapParams$: Observable<financialBootstrapParams> | undefined;

  constructor(private readonly store: Store) { }

  ngOnInit() {
    this.store.dispatch(new FinancialStateActions.Initialize());
  }

} 
