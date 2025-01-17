import { Injectable } from '@angular/core';
import { Iuser } from '../Interfaces/Iusers.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  getItem(key: string) {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  saveUser(user: Iuser) {
    this.setItem('username', user.username);
    this.setItem('password', user.password);
  }
}
