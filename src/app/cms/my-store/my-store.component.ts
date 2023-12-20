import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-store',
  templateUrl: './my-store.component.html',
  styleUrls: ['./my-store.component.scss'],
})
export class MyStoreComponent  implements OnInit {

  storeId!: string | null
  store!: Store | any

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(){
    this.getDataStore()
  }

  getDataStore() {
    const idStore = this.storeId = this.authService.getStoreId()
    this.authService.getDataStore(idStore).subscribe(data => {
      this.store = data
    })
  }
  
}
