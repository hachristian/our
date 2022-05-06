import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtscPageRoutingModule } from './dtsc-routing.module';

import { DtscPage } from './dtsc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtscPageRoutingModule
  ],
  declarations: [DtscPage]
})
export class DtscPageModule {}
