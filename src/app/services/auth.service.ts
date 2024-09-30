import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  error = '';

  login(Iuser: Iuser) {
    if (Iuser.username === 'admin' && Iuser.password === '1234') {
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
      localStorage.setItem('isLoginAuthenticated', 'true');

      return true;
    }
    localStorage.removeItem('isLoginAuthenticated');
    return false;
  }

  logout() {
    localStorage.removeItem('isLoginAuthenticated');
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    //verifica se existe o item no local storage
    //retorna um get do local storage se for true ele vai retornar true
    return !!localStorage.getItem('isLoginAuthenticated');
  }
}
