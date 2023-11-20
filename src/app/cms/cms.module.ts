import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponent } from './cms.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';


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
  ]
})
export class CmsModule { }
