import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmegPage } from './bmeg.page';

const routes: Routes = [
  {
    path: '',
    component: BmegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmegPageRoutingModule {}
