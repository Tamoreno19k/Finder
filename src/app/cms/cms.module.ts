import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.page';
import { IonicModule } from '@ionic/angular';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AuthPageRoutingModule } from '../auth/auth-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { MyStoreComponent } from './my-store/my-store.component';


@NgModule({
  declarations: [
    CmsComponent,
    ProductsComponent,
    CategoriesComponent,
    MyStoreComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    IonicModule,
    CommonModule,
    FormsModule,
    AuthPageRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CmsModule { }
