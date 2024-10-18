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
    const UsersLog = [
      {
        username: 'admin',
        password: '1234',
      },
      {
        username: 'doug',
        password: '2425',
      },
    ];

    if (
      Iuser.username === UsersLog[0].username &&
      Iuser.password === UsersLog[0].password
    ) {
      this.notify(Iuser);
      localStorage.setItem('isLoginAuthenticated', 'true');
      this.router.navigate(['/home']);
      return true;
    } else {
      return false;
    }
  }
  notify(Iuser: Iuser) {
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
  }
  getuser() {
    const user = localStorage.getItem('username');
    return user;
  }

  logout(): void {
    this.router.navigate(['/login']);
    alert('Logout efetuado com sucesso');
    localStorage.removeItem('isLoginAuthenticated');
  }
  isAuthenticated() {
    return !!localStorage.getItem('isLoginAuthenticated');
  }
}
