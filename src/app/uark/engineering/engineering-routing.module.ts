import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringPage } from './engineering.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringPage
  },
  {
    path: 'cs-professors',
    loadChildren: () => import('./cs-professors/cs-professors.module').then( m => m.CsProfessorsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringPageRoutingModule {}
