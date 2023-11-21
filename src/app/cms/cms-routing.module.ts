import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.page';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'cms-home',
    component: CmsComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
