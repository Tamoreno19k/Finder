import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseStoreAuth } from 'src/app/interfaces/response-store-auth';
import { AuthGoogleService } from 'src/app/services/auth-google.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-store',
  templateUrl: './login-store.component.html',
  styleUrls: ['./login-store.component.scss'],
})
export class LoginStoreComponent  implements OnInit {

  message!: String;
  classMessage!: String;

  loginForm: FormGroup = this.formBuilder.group({
    mail: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required ] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authSevice: AuthService,
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }

  ngOnInit() {}

  login() {

    this.authSevice.storeLogin(this.loginForm.value).subscribe((data) => {
      console.log(data);
  
      if( ! data){
        this.classMessage = 'message error';
        this.message = 'Error de autenticacion';
      }
  
      setTimeout(() => {
        this.classMessage = '';
        this.message = '';
      }, 2000);
  
      });
    }

  loginWithGoogle() {
    this.authGoogleService.loginGoogle()
  }
}
