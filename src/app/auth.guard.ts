import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const AuthServ = inject(AuthService);
  const router = inject(Router);

  if (AuthServ.isAuthenticated()) {
    alert('logado');
    return true;
  } else {
    router.navigate(['/login']);
  }

  ///////todo verificar logica de entrada
  return false;
};
