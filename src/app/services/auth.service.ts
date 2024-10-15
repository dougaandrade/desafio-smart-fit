import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);

  login(Iuser: Iuser): string | boolean {
    if (
      (Iuser.username === 'admin',
      Iuser.username === 'doug',
      Iuser.password === '1234')
    ) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        width: 'auto',
      });
      Toast.fire({
        icon: 'success',
        title: `Bem vindo ${Iuser.username}`,
      });
      localStorage.setItem('isLoginAuthenticated', 'true');
      this.router.navigate(['/home']);
      return true;
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
      });
      Toast.fire({
        icon: 'error',
        title: `usuario ou senha inválidos`,
      });
      return false;
    }
  }

  getuser() {
    const user = localStorage.getItem('username');
    console.log(user);
    return user;
  }

  logout(): void {
    localStorage.removeItem('isLoginAuthenticated');
    this.router.navigate(['/login']);
    console.log('logout');
  }
  isAuthenticated() {
    //verifica se existe o item no local storage
    //retorna um get do local storage se for true ele vai retornar home
    return !!localStorage.getItem('isLoginAuthenticated');
  }
}
