import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlexandernelsonPageRoutingModule } from './alexandernelson-routing.module';

import { AlexandernelsonPage } from './alexandernelson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlexandernelsonPageRoutingModule
  ],
  declarations: [AlexandernelsonPage]
})
export class AlexandernelsonPageModule {}
