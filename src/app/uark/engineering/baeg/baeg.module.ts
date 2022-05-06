import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaegPageRoutingModule } from './baeg-routing.module';

import { BaegPage } from './baeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaegPageRoutingModule
  ],
  declarations: [BaegPage]
})
export class BaegPageModule {}
