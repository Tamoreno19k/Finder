import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { ResponseAuth } from '../interfaces/response-auth';
import { catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL: String = environment.baseUrl;
  private authData!: User

  constructor(
    private http: HttpClient,
    private router: Router

  ) { }

  register (newUser: User){ 
    const URL = `${ this.BASE_URL}/auth/register`
  
    return this.http.post<ResponseAuth>( URL, newUser) 
  }
  
  login( credentials: User ) { 
    const URL = `${ this.BASE_URL }/auth/login`;
  
    return this.http.post<ResponseAuth>( URL, credentials )
      .pipe(
        tap( ( response: ResponseAuth ) => {
          localStorage.setItem( 'token', response.token! );
          
          this.router.navigateByUrl( '/page/tabs/tab2' );

        }),
        map( ( response: ResponseAuth ) => response.ok ),
        catchError( error => {
          return of( false );
        })
      );
  }

verifyToken(){

  const token = localStorage.getItem('token') || '';
  const URL = `${this.BASE_URL}/auth/renew-token`;
  const headers = new HttpHeaders().set('X-Token', token);

  return this.http.get<ResponseAuth>(URL, {headers})
  .pipe(
    tap(data => {
      if ( data.token){
        this.authData = data.userData!
        localStorage.setItem('token', data.token);
      }
      else{
        localStorage.removeItem('token');
      }
    }),
    map (data => data.ok),
    catchError(error =>{
      return of (false);
    } )
  );
}
}