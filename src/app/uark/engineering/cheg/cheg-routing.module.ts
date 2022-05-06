import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChegPage } from './cheg.page';

const routes: Routes = [
  {
    path: '',
    component: ChegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChegPageRoutingModule {}
