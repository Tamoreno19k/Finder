import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { homePage } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule } from '@angular/common/http'

import { homePageRoutingModule } from './home-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    homePageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    homePage,
    SearchComponent
  ]
})
export class homePageModule {}
