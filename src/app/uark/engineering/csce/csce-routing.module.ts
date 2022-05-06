import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CscePage } from './csce.page';

const routes: Routes = [
  {
    path: '',
    component: CscePage
  },
  {
    path: 'alexandernelson',
    loadChildren: () => import('./alexandernelson/alexandernelson.module').then( m => m.AlexandernelsonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CscePageRoutingModule {}
