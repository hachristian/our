import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EngineeringPage } from './engineering.page';

const routes: Routes = [
  {
    path: '',
    component: EngineeringPage
  },
  {
    path: 'csce',
    loadChildren: () => import('./csce/csce.module').then( m => m.CscePageModule)
  },
  {
    path: 'baeg',
    loadChildren: () => import('./baeg/baeg.module').then( m => m.BaegPageModule)
  },
  {
    path: 'cheg',
    loadChildren: () => import('./cheg/cheg.module').then( m => m.ChegPageModule)
  },
  {
    path: 'bmeg',
    loadChildren: () => import('./bmeg/bmeg.module').then( m => m.BmegPageModule)
  },
  {
    path: 'cveg',
    loadChildren: () => import('./cveg/cveg.module').then( m => m.CvegPageModule)
  },
  {
    path: 'dtsc',
    loadChildren: () => import('./dtsc/dtsc.module').then( m => m.DtscPageModule)
  },
  {
    path: 'eleg',
    loadChildren: () => import('./eleg/eleg.module').then( m => m.ElegPageModule)
  },
  {
    path: 'ineg',
    loadChildren: () => import('./ineg/ineg.module').then( m => m.InegPageModule)
  },
  {
    path: 'meeg',
    loadChildren: () => import('./meeg/meeg.module').then( m => m.MeegPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EngineeringPageRoutingModule {}
