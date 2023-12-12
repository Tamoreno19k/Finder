import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profilePage } from './profile.page';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {
<<<<<<< HEAD
    path: '', // Utilizamos ':id' para indicar que este segmento de la URL será un parámetro
=======
    path: '',
>>>>>>> 747c007fe7903db6994fba71536d2c1d8fa3ac60
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

