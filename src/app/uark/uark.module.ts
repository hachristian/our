import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UarkPageRoutingModule } from './uark-routing.module';
import { UarkPage } from './uark.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    UarkPageRoutingModule
  ],
  declarations: [UarkPage]
})
export class UarkPageModule {}
