import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc'

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(
    private oAuthService: OAuthService
  ) { 
    this.initLogin()
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '490760304600-kuebc8f5fq3dupm8cmf3jp2t3fo1jc57.apps.googleusercontent.com',
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
    return this.oAuthService.getIdentityClaims()
  }
}
