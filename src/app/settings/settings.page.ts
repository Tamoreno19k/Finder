import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthGoogleServiceCustomers } from '../services/auth-google-customers.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'settings-tab3',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class settingsPage implements OnInit {

  constructor(
    private authGoogleServiceCustomers: AuthGoogleServiceCustomers,
    private router: Router, 
    private authService: AuthService
  ) {}

  ngOnInit() {}


  //TODO: Tengo que crear la logica para que borre el token 
  logOutCustomers() {
    this.authGoogleServiceCustomers.logOutGoogle()
    this.router.navigate(['auth/login'])  

  }
  logOutCx() {
    this.authService.removeCxToken('token')
    this.router.navigate(['auth/login'])
  }

}
