import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc'

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleServiceCustomers {

  constructor(
    private oAuthService: OAuthService
  ) { 
    this.initLogin()
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '952609926775-26ihebgrcblrtp8mfbs4n6vonulv0pc5.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/page/tabs/tab2', // aca como se redirige a el main page de usuario registrado vs tienda?
      scope: 'openid profile email',
    }

    this.oAuthService.configure(config)
    this.oAuthService.setupAutomaticSilentRefresh()
    this.oAuthService.loadDiscoveryDocumentAndTryLogin()
  }

  loginGoogle() {
    this.oAuthService.initLoginFlow()
  }

  logOutGoogle(){
    this.oAuthService.logOut()
  }

  getGoogleProfile() {
   this.oAuthService.getIdentityClaims()
  
  } 
}
