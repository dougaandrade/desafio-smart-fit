import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const AuthServ = inject(AuthService);
  const router = inject(Router);

  if (AuthServ.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    console.log('nao autenticado');
    return false;
  }
};
