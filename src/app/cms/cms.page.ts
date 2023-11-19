import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../services/auth-google.service';

@Component({
  selector: 'app-cms',
  templateUrl: './cms.page.html',
  styleUrls: ['./cms.page.scss'],
})
export class CmsComponent  implements OnInit {

  constructor(
    private authGoogleService: AuthGoogleService
  ) { }

  ngOnInit() {}

  showData() {
    const data = JSON.stringify(this.authGoogleService.getGoogleProfile())
    console.log(data)
  }

  logOut() {
    this.authGoogleService.logOutGoogle()
  }

}
