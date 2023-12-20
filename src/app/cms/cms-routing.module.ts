import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.page';
import { ProductsComponent } from './products/products.component';
import { verificationAuthGuard } from '../guards/auth-guard.guard';
import { CategoriesComponent } from './categories/categories.component';
import { MyStoreComponent } from './my-store/my-store.component';

const routes: Routes = [
  {
    path: 'cms-home',
    component: CmsComponent,
    children: [
      {
        path: '',
        redirectTo: 'my-store'
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'my-store',
        component: MyStoreComponent
      }
    ],
    canActivate: [verificationAuthGuard]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
