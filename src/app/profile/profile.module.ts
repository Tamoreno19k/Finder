import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { profilePage } from './profile.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { profilePageRoutingModule } from './profile-routing.module';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    profilePageRoutingModule
  ],
  declarations: [
    profilePage,
    HistorialComponent
  ]
})
export class profilePageModule {}
