import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html', 
  styleUrls: ['./security.component.scss'],
})

export class SecurityComponent  {
  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  public alertButton = [
    // {
    //   text: 'Cerrar',
    //   role: 'cancel',
    //   handler: () => {
    //   console.log('Alert canceled');
    //   },
    // },
    {
      text: 'Aceptar',
      role: 'confirm',
      handler: () => {
       console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev: CustomEvent) {
    console.log(`Dismissed with role: ${ev.detail.role}`);  
  }
  logOutCx() {
    this.authService.removeCxToken('token')
    this.router.navigate(['auth/login'])
  }
}
