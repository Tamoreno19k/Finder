import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homePage } from './home.page';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: homePage,
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homePageRoutingModule {}
