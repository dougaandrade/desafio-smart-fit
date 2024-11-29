import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NotifyService } from './notify.service';

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
  private readonly notify = inject(NotifyService);
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
      this.notify.notifyUserSucess(Iuser);
      sessionStorage.setItem('isLoginAuthenticated', 'true');
      sessionStorage.setItem('username', Iuser.username);
      this.currentUserSubject.next(Iuser.username);
      this.currentUserSubject.error('ERROR');
      this.router.navigate(['/home']);
      return of(true);
    } else {
      this.notify.notifyUserError('Usuário ou senha inválidos');
      return of(false);
    }
  }

  getUser() {
    return this.currentUser$;
  }
  logout(): void {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('isLoginAuthenticated');
    this.currentUserSubject.next('Login');
    this.currentUserSubject.error('Error');
    this.notify.notifyLogout();
  }
  isAuthenticated() {
    return !!sessionStorage.getItem('isLoginAuthenticated');
  }
}
