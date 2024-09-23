import { Iuser } from './../Interfaces/Iuser.interface';
import { inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  isLoginAuthenticated = false;
  router = inject(Router);
  ngOnInit(): void {
    if (localStorage.getItem('isLoginAuthenticated')) {
      this.isLoginAuthenticated =
        localStorage.getItem('isLoginAuthenticated') === 'true';
    }
  }

  login(Iuser: Iuser): boolean {
    if (Iuser.username === 'admin' && Iuser.password === '1234') {
      this.isLoginAuthenticated = true;
      localStorage.setItem('isLoginAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoginAuthenticated = false;
    localStorage.removeItem('isLoginAuthenticated');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    this.isLoginAuthenticated =
      localStorage.getItem('isLoginAuthenticated') === 'true';
    return this.isLoginAuthenticated || this.router.url === '/login';
  }
}
