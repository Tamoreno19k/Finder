import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { settingsPage } from './settings.page';
import { LoginStoreComponent } from './login-store/login-store.component';

const routes: Routes = [
  {
    path: '',
    component: settingsPage,
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
