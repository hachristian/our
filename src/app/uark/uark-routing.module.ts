import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UarkPage } from './uark.page';

const routes: Routes = [
  {
    path: '',
    component: UarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UarkPageRoutingModule {}
