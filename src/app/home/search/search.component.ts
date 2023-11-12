import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent  implements OnInit {

  searchForm = new FormControl()

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.observerChangeSearch()
  }

  observerChangeSearch() {
    this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      console.log(value)
    })
  }
  
}
