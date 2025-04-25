import { Iuser } from './../Interfaces/Iusers.interface';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { NotifyService } from './notify.service';
import { StorageService } from './storage.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly notify = inject(NotifyService);
  private readonly storage = inject(StorageService);
  private readonly UsersLog = inject(UsersService);

  private readonly currentUserSubject = new BehaviorSubject<string>('Login');
  public readonly currentUser$: Observable<string> =
    this.currentUserSubject.asObservable();
  private readonly router = inject(Router);

  login(Iuser: Iuser): Observable<boolean> {
    const userfind = this.UsersLog.getUsers().find(
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

  addNewUser(Iuser: Iuser): void {
    const userfind = this.UsersLog.getUsers().find(
      (user) => user.username === Iuser.username
    );
    if (userfind) {
      this.notify.notifyUserError('Usuário existente, tente novamente');
      return;
    }
    this.UsersLog.addUser(Iuser);
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
