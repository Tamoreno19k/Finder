import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { map, tap } from 'rxjs'
import { ResponseAuth } from '../interfaces/response-auth';
import { ResponseUser } from '../interfaces/response-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string = environment.baseUrl
  headers: HttpHeaders
  token: string
  
  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token')
    this.token = token ? token : ''
    this.headers = new HttpHeaders().set ('X-Token', this.token)
  }

  getUserById(id: string|undefined) {
    return this.http.get<ResponseUser>(`${this.BASE_URL}/auth/user/${id}`)
      .pipe(
        tap( data => {
          console.log(data)
          return data
        }),
        map( data => data.data )
      )
  }
  
  updateUser (id: string, user: User) {
    console.log(id)

    return this.http.patch(
      `${ this.BASE_URL }/tabs1/${ id }`,
      user,
      { headers: this.headers })
  }
}
