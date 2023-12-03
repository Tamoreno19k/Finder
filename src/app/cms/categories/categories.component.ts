import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent  implements OnInit {

  categories!: Category[]

  constructor(
    private categoryServices: CategoryService 
  ) { }

  ngOnInit() {
    this.loadCategories()
  }

  loadCategories() {
    this.categoryServices.getAllCategories().subscribe(data => {
      console.log(data.data)
      this.categories = data.data
    })
  }

}
