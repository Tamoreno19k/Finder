import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { verificationAuthGuard } from '../guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../profile/profile.module').then(m => m.profilePageModule),
        canActivate: [verificationAuthGuard]  // Ajusta según sea necesario
      },
      {
        path: 'tab2',
        loadChildren: () => import('../home/home.module').then(m => m.homePageModule),
        canActivate: [verificationAuthGuard]
      },
      {
        path: 'tab3',
        loadChildren: () => import('../settings/settings.module').then(m => m.settingsPageModule),
        canActivate: [verificationAuthGuard]  // Ajusta según sea necesario
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
