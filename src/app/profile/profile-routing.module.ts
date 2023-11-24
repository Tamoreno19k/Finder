import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profilePage } from './profile.page';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {
    path: ':id',
    component: profilePage,
  },
  {
    path: 'historial',
    component: HistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class profilePageRoutingModule {}
