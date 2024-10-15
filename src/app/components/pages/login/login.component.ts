import { AuthService } from './../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from '../../../Interfaces/Iuser.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly loginAuth = inject(AuthService);
  login = inject(FormBuilder);
  router = inject(Router);

  formLogin = new FormGroup({
    username: new FormControl<string>('', Validators.nullValidator),
    password: new FormControl<string>('', Validators.nullValidator),
  });

  onLogin() {
    this.loginAuth.login(this.formLogin.value as Iuser);
  }
}
