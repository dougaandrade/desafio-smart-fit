import { AuthService } from './../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from '../../../Interfaces/Iuser.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  islogin = true;
  login = inject(FormBuilder);
  private router = inject(Router);
  private AuthService = inject(AuthService);
  error = [''];

  ngOnInit(): void {
    if (this.AuthService.isAuthenticated()) {
      this.router.navigate(['login']);
    } else {
      this.router.navigate(['home']);
    }
  }

  formGroup = this.login.group({
    username: ['', Validators.required, Validators.minLength(3)],
    password: ['', Validators.required],
  });

  onLogin() {
    if (this.AuthService.login((this.formGroup.value as Iuser))) {
      this.router.navigate(['home']);
    } else {
      this.error = ['Usuário ou senha inválidos'];
    }
  }
}
