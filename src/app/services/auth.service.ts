import { inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  getname() {
    throw new Error('Method not implemented.');
  }
  isLoginAuthenticated = false;
  router = inject(Router);
  user: any;

  ngOnInit(): void {
    if (localStorage.getItem('isLoginAuthenticated')) {
      this.isLoginAuthenticated =
        localStorage.getItem('isLoginAuthenticated') === 'true';
    }
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123') {
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
