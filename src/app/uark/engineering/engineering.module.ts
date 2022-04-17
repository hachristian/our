import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EngineeringPageRoutingModule } from './engineering-routing.module';

import { EngineeringPage } from './engineering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EngineeringPageRoutingModule
  ],
  declarations: [EngineeringPage]
})
export class EngineeringPageModule {}
