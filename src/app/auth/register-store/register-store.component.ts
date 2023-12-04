import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseStoreAuth } from 'src/app/interfaces/response-store-auth';
import { Store } from 'src/app/interfaces/store';
import { AuthGoogleServiceCustomers } from 'src/app/services/auth-google-customers.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-store',
  templateUrl: './register-store.component.html',
  styleUrls: ['./register-store.component.scss'],
})
export class RegisterStoreComponent {

  message!: String;
  classMessage!: String;

  registerForm: FormGroup = this.formBuilder.group({
    storeName: [ '', [Validators.required, Validators.minLength( 3 ),] ],
    urlLogo: ['', [Validators.required, Validators.minLength(3)],],
    nit: [ '', [Validators.required]],
    mail: [ '',[ Validators.required, Validators.email]],
    password: [ '',[ Validators.required, Validators.minLength( 6 ), Validators.maxLength( 15 )]],
    // repeatPassword: [ '',[ Validators.required]] preguntar si hay algun validator para confirmar password
    phone: [ '',[ Validators.required]],
    address: ['', [Validators.required, Validators.minLength(3),]],
    description: ['', [Validators.required, Validators.minLength(3),]]// ver si se puede hacer un regex para validar este fieled
  });

  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,

  ) {}

  onSubmit() {
    console.log( this.registerForm.value ); 

    this.authService.storeRegister( this.registerForm.value ).subscribe( (data: ResponseStoreAuth) => {
 
      if( data.ok )
        this.classMessage = 'message success';
      else
        this.classMessage = 'message error'

      setTimeout( () => {
        this.classMessage = '';
        this.message = '';
      }, 2000 );

      this.message = data.msg!;
    });

    this.registerForm.reset();
    this.router.navigateByUrl('/auth/login-store')
  }

}
