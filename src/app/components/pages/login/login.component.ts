import { AuthService } from './../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    username: [''],
    password: [''],
  });

  onLogin() {
    if (
      this.AuthService.login(
        this.formGroup.value.username ?? '',
        this.formGroup.value.password ?? ''
      )
    ) {
      this.router.navigate(['home']);
    } else {
      this.error = ['Usuário ou senha inválidos'];
    }
  }
}
