import { inject, Injectable } from '@angular/core';
import { Iuser } from '../Interfaces/Iusers.interface';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly userlogin: Iuser[] = [
    { username: 'doug', password: '2425' },
    { username: 'admin', password: '1234' },
  ];

  getUsers(): Iuser[] {
    return this.userlogin;
  }

  addUser(user: Iuser) {
    this.userlogin.push(user);
  }
}
