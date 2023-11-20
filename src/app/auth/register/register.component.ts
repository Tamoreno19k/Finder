import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  message!: String;
  classMessage!: String;

  registerForm: FormGroup = this.formBuilder.group({
    name: [ '', [Validators.required, Validators.minLength( 3 ),] ],
    lastName: [ '', [Validators.required, Validators.minLength( 3 ),] ],
    username: [ '',[ Validators.required, Validators.email]],
    password: [ '',[ Validators.required, Validators.minLength( 6 ), Validators.maxLength( 15 )]],
    // repeatPassword: [ '',[ Validators.required]] preguntar si hay algun validator para confirmar password
    phone: [ '',[ Validators.required]] // ver si se puede hacer un regex para validar este fieled
  });

  constructor( 
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit() {
    console.log( this.registerForm.value ); 

    this.authService.register( this.registerForm.value ).subscribe( data => {
 
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
  }
}