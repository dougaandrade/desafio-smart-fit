import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const AuthServ = inject(AuthService);
  const router = inject(Router);

  if (AuthServ.isAuthenticated()) {
    console.log('autenticado');
    return true;
  } else {
    console.log('nao autenticado');
    router.navigate(['/login']);
    return false;
  }
};
