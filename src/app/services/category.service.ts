import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseCategory } from '../interfaces/response-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL: string = environment.baseUrl
  headers: HttpHeaders
  token: string

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token')
    this.token = token ? token: ''
    this.headers = new HttpHeaders().set('X-Token', this.token)
   }

  getAllCategories() {
    return this.http.get<ResponseCategory>(`${this.BASE_URL}/categories`)
  }
}
