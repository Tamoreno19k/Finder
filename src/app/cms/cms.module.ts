import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { AuthPageRoutingModule } from '../auth/auth-routing.module';


@NgModule({
  declarations: [
    CmsComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    IonicModule,
    CommonModule,
    FormsModule,
    AuthPageRoutingModule
  ]
})
export class CmsModule { }
