import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const AuthServ = inject(AuthService);
  const router = inject(Router);

  if (AuthServ.isAuthenticated()) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      width: '300px',
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Autenticado com sucesso!',
    });
    return true;
  } else {
    router.navigate(['/login']);
    console.log('nao autenticado');
    return false;
  }
};
