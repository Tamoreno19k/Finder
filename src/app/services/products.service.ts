import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseProducts } from '../interfaces/response-products';
import { Product } from '../interfaces/product';
import { map, tap } from 'rxjs';
import { ResponseProduct } from '../interfaces/response-product';
import { ResponseSearchStore } from '../interfaces/response-search-store';
import { Store } from '../interfaces/store'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  BASE_URL: string = environment.baseUrl
  headers: HttpHeaders
  token: string

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token')
    this.token = token ? token : ''
    this.headers = new HttpHeaders().set('X-Token', this.token)
  }

  getAllProducts() {
    return this.http.get<ResponseProducts>(`${this.BASE_URL}/products`)
  }

  createProduct(data: Product) {
    return this.http.post<ResponseProducts>(`${this.BASE_URL}/products`, 
    data, 
    {headers: this.headers})   
  }

  deleteProductById(id: string) {
    console.log(id)
    return this.http.delete(`${this.BASE_URL}/products/${id}`,
    {headers: this.headers})
  }

  getProductById(id: string){
    return this.http.get<ResponseProduct>(`${this.BASE_URL}/products/${id}`)
    .pipe(
      tap(data => {
        console.log(data)
        return data;
      }),
      map(product => product.getProduct)
    )
  }


  updateProduct(id: string, product: Product) {
    return this.http.patch(`${this.BASE_URL}/products/${id}`, product, {headers: this.headers})
  }

  searchStoreByProduct (term: string) {
    return this.http.get<ResponseSearchStore>(`${this.BASE_URL}/products/search/${term}`)
    .pipe(
      map(res => res.result)
    )
  }
}
