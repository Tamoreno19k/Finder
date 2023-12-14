import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  logOutCx() {
    this.authService.removeCxToken('token')
    this.router.navigate(['auth/login'])
  }

}
