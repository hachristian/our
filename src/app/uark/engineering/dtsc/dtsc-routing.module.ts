import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtscPage } from './dtsc.page';

const routes: Routes = [
  {
    path: '',
    component: DtscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtscPageRoutingModule {}
