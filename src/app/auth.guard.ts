import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const AuthServ = inject(AuthService);
  const router = inject(Router);

  if (AuthServ.isAuthenticated()) {
    console.log('Authenticated');
    return true;
  } else {
    router.navigate(['/login']);
    console.log('Not Authenticated');
    return false;
  }
};
