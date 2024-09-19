import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoginAuthenticated = false;
  router = inject(Router);

  login(user: string, password: string): boolean {
    if (user === 'admin' && password === '123') {
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
    return this.isLoginAuthenticated || this.router.url === '/login';
  }
}
