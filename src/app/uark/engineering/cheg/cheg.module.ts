import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChegPageRoutingModule } from './cheg-routing.module';

import { ChegPage } from './cheg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChegPageRoutingModule
  ],
  declarations: [ChegPage]
})
export class ChegPageModule {}
