import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegPage } from './eleg.page';

const routes: Routes = [
  {
    path: '',
    component: ElegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegPageRoutingModule {}
