import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const AuthServ = inject(AuthService);
  const router = inject(Router);

  if (AuthServ.isAuthenticated()) {
    console.log(AuthServ.isAuthenticated());
    return true;
  } else {
    console.log(AuthServ.isAuthenticated());
    router.navigate(['/login']);
    return false;
  }
};
