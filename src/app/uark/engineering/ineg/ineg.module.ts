import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InegPageRoutingModule } from './ineg-routing.module';

import { InegPage } from './ineg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InegPageRoutingModule
  ],
  declarations: [InegPage]
})
export class InegPageModule {}
