import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGoogleServiceCustomers } from 'src/app/services/auth-google-customers.service';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent{
 message!: String;
 classMessage!: String;

 loginForm: FormGroup = this.formBuilder.group({
  username: [ '', [ Validators.required, Validators.email ] ],
  password: [ '', [ Validators.required ] ]
});
  constructor(
    private formBuilder: FormBuilder,
    private authSevice: AuthService,
    private authGoogleServiceCustomers: AuthGoogleServiceCustomers,
    private router: Router
  ) {}

  loginWithGoogle(){
    this.authGoogleServiceCustomers.loginGoogle();
    // const data = JSON.stringify(this.authGoogleServiceCustomers.getGoogleProfile())
    // console.log(data) //check this one
    this.router.navigate(['pages', 'tabs', 'tabs2'])

  }  // despues del sing in with google o el sign in normal, no esta enviando a los usuarios a pages/tab/tab2, hay algo mal en esta parte o al momento de recibir el token de google no lo esta cogiendo el canactivate

  login() {

  this.authSevice.login(this.loginForm.value).subscribe((data: boolean) => {
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
    // this.router.navigate(['pages', 'tabs', 'tabs2'])

  }
}
