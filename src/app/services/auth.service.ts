import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
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
  private readonly currentUserSubject = new BehaviorSubject<string>('Login');
  public currentUser$: Observable<string> =
    this.currentUserSubject.asObservable();
  router = inject(Router);

  constructor() {
    const savedUser = sessionStorage.getItem('username');
    if (savedUser) {
      this.currentUserSubject.next(savedUser);
    }
  }
  login(Iuser: Iuser): Observable<boolean> {
    const userfind = UsersLog.find(
      (user) =>
        user.username === Iuser.username && user.password === Iuser.password
    );
    if (userfind) {
      this.notify(Iuser);
      sessionStorage.setItem('isLoginAuthenticated', 'true');
      sessionStorage.setItem('username', Iuser.username);
      this.currentUserSubject.next(Iuser.username);
      this.currentUserSubject.error('ERROR');
      this.router.navigate(['/home']);
      return of(true);
    } else {
      return of(false);
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

  getUser() {
    return this.currentUser$;
  }
  logout(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isLoginAuthenticated');
    this.currentUserSubject.next('Login');
    this.currentUserSubject.error('Error');
    alert('logout');
  }
  isAuthenticated() {
    return !!sessionStorage.getItem('isLoginAuthenticated');
  }
}
