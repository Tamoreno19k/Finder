import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { settingsPage } from './settings.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { settingsPageRoutingModule } from './settings-routing.module';
import { LoginStoreComponent } from './login-store/login-store.component';
import { SecurityComponent } from './security/security.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';

import { HelpSupportComponent } from './help-support/help-support.component';
import { AboutFinderComponent } from './about-finder/about-finder.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    settingsPageRoutingModule
  ],
  declarations: [
    settingsPage,
    LoginStoreComponent,
    SecurityComponent,
    PaymentMethodsComponent,
    HelpSupportComponent,
    AboutFinderComponent
  ]
})
export class settingsPageModule {}
