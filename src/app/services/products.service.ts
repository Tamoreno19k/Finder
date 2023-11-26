import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseProducts } from '../interfaces/response-products';
import { Product } from '../interfaces/product';

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
}
