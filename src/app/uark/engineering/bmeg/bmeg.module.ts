import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmegPageRoutingModule } from './bmeg-routing.module';

import { BmegPage } from './bmeg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmegPageRoutingModule
  ],
  declarations: [BmegPage]
})
export class BmegPageModule {}
