import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPage } from './auth.page';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginStoreComponent } from './login-store/login-store.component';
import { RegisterStoreComponent } from './register-store/register-store.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthPageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [
    AuthPage, 
    LoginComponent,
    LoginStoreComponent,
    RegisterComponent,
    RegisterStoreComponent,
    ResetPasswordComponent
  ]})
export class AuthPageModule {}
