import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);

  login(Iuser: Iuser): string | boolean {
    const userfind = UsersLog.find(
      (user) =>
        user.username === Iuser.username && user.password === Iuser.password
    );
    if (userfind) {
      this.notify(Iuser);
      sessionStorage.setItem('isLoginAuthenticated', 'true');
      sessionStorage.setItem('username', Iuser.username);
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
    const user = sessionStorage.getItem('username');
    return user;
  }

  logout(): void {
    this.router.navigate(['/login']);
    alert('Logout efetuado com sucesso');
    sessionStorage.removeItem('isLoginAuthenticated');
  }
  isAuthenticated() {
    return !!sessionStorage.getItem('isLoginAuthenticated');
  }
}
