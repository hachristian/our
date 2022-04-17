import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsProfessorsPage } from './cs-professors.page';

const routes: Routes = [
  {
    path: '',
    component: CsProfessorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsProfessorsPageRoutingModule {}
