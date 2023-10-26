import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { ActivateApiComponent } from './activate-api.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  <Route>{
    path: '', component: ActivateApiComponent, children: [
      <Route>{ path: '', component: MainComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivateApiRoutingModule {}
