import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { settingsPage } from './settings.page';
import { LoginStoreComponent } from './login-store/login-store.component';
import { SecurityComponent } from './security/security.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PrivacyComponent } from './privacy/privacy.component';
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
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'help-support',
    component: HelpSupportComponent
  },
  {
    path: 'about-finder',
    component: AboutFinderComponent
  },
  {
    path: 'store-login',
    component: LoginStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class settingsPageRoutingModule {}
