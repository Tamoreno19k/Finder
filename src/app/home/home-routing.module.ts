import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homePage } from './home.page';
import { SearchComponent } from './search/search.component'
import { StoreDetailsComponent } from './store-details/store-details.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: homePage,
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'store-details/:storeId',
    component: StoreDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homePageRoutingModule {}
