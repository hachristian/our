import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeegPageRoutingModule } from './meeg-routing.module';

import { MeegPage } from './meeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeegPageRoutingModule
  ],
  declarations: [MeegPage]
})
export class MeegPageModule {}
