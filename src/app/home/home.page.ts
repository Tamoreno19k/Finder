import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class homePage {

  constructor(
    private router: Router
  ) {}

  goToSearch() {
    this.router.navigate(['tabs/tab2/search'])
  }

}
