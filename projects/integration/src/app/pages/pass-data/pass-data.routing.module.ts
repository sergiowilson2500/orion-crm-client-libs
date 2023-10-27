import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PassDataComponent } from './pass-data.component';

const routes: Routes = [
  <Route>{
    path: '', component: PassDataComponent, children: [
      <Route>{ path: '', component: MainComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassDataRoutingModule {}
