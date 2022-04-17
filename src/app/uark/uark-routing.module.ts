import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UarkPage } from './uark.page';

const routes: Routes = [
  {
    path: '',
    component: UarkPage
  },
  {
    path: 'engineering',
    loadChildren: () => import('./engineering/engineering.module').then( m => m.EngineeringPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UarkPageRoutingModule {}
