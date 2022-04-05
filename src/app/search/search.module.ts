import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
// import { ScrollingModule } from '@angular/cdk/scrolling';

import { SearchPageRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchPageRoutingModule,
    // ScrollingModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule {
}
