import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';


export const verificationAuthGuard: CanActivateFn = (route, state) => {

  const  authService = inject(AuthService);
  const router = inject (Router);


return authService.verifyToken()
.pipe(
  tap (value => {
    console.log( '::::::::', value );
    if (! value) {router.navigateByUrl('/auth/login')}
  })
)
}
