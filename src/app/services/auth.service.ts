import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NotifyService } from './notify.service';
import { StorageService } from './storage.service';

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
  private readonly storage = inject(StorageService);
  private readonly currentUserSubject = new BehaviorSubject<string>('Login');
  public currentUser$: Observable<string> =
    this.currentUserSubject.asObservable();
  router = inject(Router);

  login(Iuser: Iuser): Observable<boolean> {
    const userfind = UsersLog.find(
      (user) =>
        user.username === Iuser.username && user.password === Iuser.password
    );
    if (userfind) {
      this.storage.setItem('isLoginAuthenticated', 'true');
      this.storage.setItem('username', Iuser.username);

      this.notify.notifyUserSucess(Iuser);
      this.currentUserSubject.next(Iuser.username);

      this.router.navigate(['/home']);

      return of(true);
    } else {
      this.notify.notifyUserError('Usuário ou senha inválidos');
      return of(false);
    }
  }

  getUser() {
    const savedUser = this.storage.getItem('username');
    if (savedUser) {
      this.currentUserSubject.next(savedUser);
    }
  }
  logout(): void {
    this.storage.removeItem('username');
    this.storage.removeItem('isLoginAuthenticated');
    this.currentUserSubject.next('Login');
    this.notify.notifyLogout();
  }
  isAuthenticated() {
    return !!this.storage.getItem('isLoginAuthenticated');
  }
}
