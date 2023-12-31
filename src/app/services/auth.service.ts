import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { ResponseAuth } from '../interfaces/response-auth';
import { catchError, map, of, tap } from 'rxjs';
import { Store } from '../interfaces/store';
import { ResponseStoreAuth } from '../interfaces/response-store-auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL: String = environment.baseUrl;
  private authData!: User
  userData!: User

  constructor(
    private http: HttpClient,
    private router: Router

  ) { }

  /** Getter */
  get user() {
    // Evita modificaciones sobre el atributo de la clase "Inmutable"
    return { ...this.authData };
  }


  register (newUser: User){ 
    const URL = `${ this.BASE_URL}/auth/register`
  
    return this.http.post<ResponseAuth>( URL, newUser) 
  }

  storeRegister (newStore: Store){ 
    const URL = `${ this.BASE_URL}/auth/cms/register`
  
    return this.http.post<ResponseStoreAuth>( URL, newStore) 
  }
  
  login( credentials: User ) { 
    const URL = `${ this.BASE_URL }/auth/login`;
  
    return this.http.post<ResponseAuth>( URL, credentials )
      .pipe(
        tap( ( response: ResponseAuth ) => {
          localStorage.setItem( 'token', response.token! );
          this.userData = response.userData
          
          this.router.navigateByUrl( '/page/tabs/tab2' );

        }),
        map( ( response: ResponseAuth ) => response.ok ),
        catchError( error => {
          return of( false );
        })
      );
  }

  storeLogin( credentials: Store ) { 
    const URL = `${ this.BASE_URL }/auth/cms/login`;
  
    return this.http.post<ResponseStoreAuth>( URL, credentials )
      .pipe(
        tap( ( response: ResponseStoreAuth ) => {
          localStorage.setItem( 'token', response.token! );
          localStorage.setItem('storeId', response.storeId!)
          
          this.router.navigateByUrl( '/cms/cms-home' );

        }),
        map( ( response: ResponseStoreAuth ) => response.ok ),
        catchError( error => {
          return of( false );
        })
      );
  }

  getStoreId(): string | null {
    return localStorage.getItem('storeId')
  }

  getDataStore(storeId: string | null) {
    return this.http.get<ResponseStoreAuth>(`${this.BASE_URL}/auth/cms/user/${storeId}`)
    .pipe(
      map(data => data.storeData)
    )
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
  removeToken(token: string, storeId: string) {
    localStorage.removeItem(token)
    localStorage.removeItem(storeId)
}
removeCxToken(token: string) {
  localStorage.removeItem(token)
}
}