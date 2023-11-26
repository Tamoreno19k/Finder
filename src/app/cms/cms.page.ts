import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.page.html',
  styleUrls: ['./cms.page.scss'],
})
export class CmsComponent  implements OnInit {

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }

  ngOnInit() {}

  showData() {
    const data = JSON.stringify(this.authGoogleService.getGoogleProfile())
    console.log(data)
  }

  logOut() {
    this.authGoogleService.logOutGoogle()
    this.router.navigate(['page/tabs/tab3/store-login'])
  }

  goToProducts(event: Event): void {
    event.preventDefault()
    this.router.navigate(['cms/cms-home/products'])
  }

}
