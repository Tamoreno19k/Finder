import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from 'src/app/services/auth-google.service';

@Component({
  selector: 'app-login-store',
  templateUrl: './login-store.component.html',
  styleUrls: ['./login-store.component.scss'],
})
export class LoginStoreComponent  implements OnInit {

  constructor(
    private authGoogleService: AuthGoogleService
  ) { }

  ngOnInit() {}

  login() {
    this.authGoogleService.loginGoogle()
  }
}
