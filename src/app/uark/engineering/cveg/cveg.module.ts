import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvegPageRoutingModule } from './cveg-routing.module';

import { CvegPage } from './cveg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvegPageRoutingModule
  ],
  declarations: [CvegPage]
})
export class CvegPageModule {}
