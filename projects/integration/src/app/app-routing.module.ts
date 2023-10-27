import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  <Route>{ path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  <Route>{ path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  <Route>{ path: 'activate-action', loadChildren: () => import('./pages/activate-action/activate-action.module').then(m => m.ActivateActionModule) },
  <Route>{ path: 'pass-data', loadChildren: () => import('./pages/pass-data/pass-data.module').then(m => m.PassDataModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
