import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class profilePage {
  constructor(
    private router: Router
  ) {}
  
  goToHistorial(event: Event): void {
    event.preventDefault();
    this.router.navigate(['tabs/tab1/historial'])
  }
}
