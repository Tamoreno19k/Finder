import { HttpClient } from '@angular/common/http';
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
          
          // this.router.navigateByUrl( '/dashboard' ); I have to create a dashboard as well
          this.router.navigate( [ 'dashboard' ] );
        }),
        map( ( response: ResponseAuth ) => response.ok ),
        catchError( error => {
          return of( false );
        })
      );
  }
}
