import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaegPage } from './baeg.page';

const routes: Routes = [
  {
    path: '',
    component: BaegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaegPageRoutingModule {}
