import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../services/auth-google.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.page.html',
  styleUrls: ['./cms.page.scss'],
})
export class CmsComponent  implements OnInit {

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  showData() {
    const data = JSON.stringify(this.authGoogleService.getGoogleProfile())
    console.log(data)
  }

  logOut() {
    this.authService.removeToken('token')
    this.router.navigate(['auth/login-store'])
  }

  goToProducts(event: Event): void {
    event.preventDefault()
    this.router.navigate(['cms/cms-home/products'])
  }

}
