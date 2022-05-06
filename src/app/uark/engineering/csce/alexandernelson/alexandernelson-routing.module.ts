import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlexandernelsonPage } from './alexandernelson.page';

const routes: Routes = [
  {
    path: '',
    component: AlexandernelsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlexandernelsonPageRoutingModule {}
