import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Store } from 'src/app/interfaces/store'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  searchForm = new FormControl()
  nameProduct!: string

  constructor(
    private http: HttpClient,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.searchProduct()
  }

  searchProduct() {
    this.productService.searchStoreByProduct(this.nameProduct).subscribe(data => {
      this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {
        console.log(value)
      })
    })
  }
  
}
