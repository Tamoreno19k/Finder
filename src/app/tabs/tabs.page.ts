// tabs.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  userId: string = ''; // Inicializar la propiedad userId

  constructor(private router: Router) {}

  backToHome() {
    this.router.navigate(['/tabs/tab2']);
  }
}
