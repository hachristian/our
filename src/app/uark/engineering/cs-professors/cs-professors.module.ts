import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsProfessorsPageRoutingModule } from './cs-professors-routing.module';

import { CsProfessorsPage } from './cs-professors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsProfessorsPageRoutingModule
  ],
  declarations: [CsProfessorsPage]
})
export class CsProfessorsPageModule {}
