import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homePage } from './home.page';
import { SearchComponent } from './search/search.component'
import { StoreDetailsComponent } from './store-details/store-details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: homePage,
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'store-details/:storeId',
    component: StoreDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class homePageRoutingModule {}
