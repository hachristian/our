import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CscePageRoutingModule } from './csce-routing.module';

import { CscePage } from './csce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CscePageRoutingModule
  ],
  declarations: [CscePage]
})
export class CscePageModule {}
