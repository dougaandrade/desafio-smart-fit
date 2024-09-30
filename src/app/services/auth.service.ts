import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);
  error = '';

  login(Iuser: Iuser) {
    if (Iuser.username === 'admin' && Iuser.password === '1234') {
      localStorage.setItem('isLoginAuthenticated', 'true');

      return true;
    }
    localStorage.removeItem('isLoginAuthenticated');
    return false;
  }

  logout() {
    localStorage.removeItem('isLoginAuthenticated');
    this.router.navigate(['/login']);
    console.log('logout');
  }

  isAuthenticated() {
    //verifica se existe o item no local storage
    //retorna um get do local storage se for true ele vai retornar true
    return !!localStorage.getItem('isLoginAuthenticated');
  }
}
