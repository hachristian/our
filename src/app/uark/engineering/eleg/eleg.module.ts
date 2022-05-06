import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegPageRoutingModule } from './eleg-routing.module';

import { ElegPage } from './eleg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegPageRoutingModule
  ],
  declarations: [ElegPage]
})
export class ElegPageModule {}
