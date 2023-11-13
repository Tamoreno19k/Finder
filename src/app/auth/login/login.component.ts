import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private authSevice: AuthService
  ) {}

  login() {

  this.authSevice.login(this.loginForm.value).subscribe((data: boolean) => { // this error will be resolved as soon as I am done with the auth service
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
}
