import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { settingsPage } from './settings.page';
import { SecurityComponent } from './security/security.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { AboutFinderComponent } from './about-finder/about-finder.component';

const routes: Routes = [
  {
    path: '',
    component: settingsPage,
  },
  {
    path: 'security',
    component: SecurityComponent
  },
  {
    path: 'payment-methods',
    component: PaymentMethodsComponent
  },
  {
    path: 'help-support',
    component: HelpSupportComponent
  },
  {
    path: 'about-finder',
    component: AboutFinderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class settingsPageRoutingModule {}
