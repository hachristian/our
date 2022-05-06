import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InegPage } from './ineg.page';

const routes: Routes = [
  {
    path: '',
    component: InegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InegPageRoutingModule {}
