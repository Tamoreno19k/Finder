import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Store } from 'src/app/interfaces/store'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  searchForm = new FormControl()
  nameProduct!: string
  stores!: Store[]

  constructor(
    private http: HttpClient,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
   this.searchProduct()
  }


  searchProduct() {
    this.searchForm.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(value => {
      this.productService.searchStoreByProduct(value).subscribe(data => {
        console.log(data)
        this.stores = data
      })
    })
  }

  goToStore(storeId: string) {
    this.router.navigate([`/page/tabs/tab2/store-details/${storeId}`])
  }
}
