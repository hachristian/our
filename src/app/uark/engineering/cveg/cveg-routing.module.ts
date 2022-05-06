import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvegPage } from './cveg.page';

const routes: Routes = [
  {
    path: '',
    component: CvegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvegPageRoutingModule {}
