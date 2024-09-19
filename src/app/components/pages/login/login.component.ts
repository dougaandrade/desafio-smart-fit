import { AuthService } from './../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  MaxValidator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { setEnvironmentData } from 'worker_threads';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login = inject(FormBuilder);
  private router = inject(Router);
  private AuthService = inject(AuthService);
  error = [''];

  formGroup = this.login.group({
    user: [''],
    password: [''],
  });

  onLogin() {
    if (
      this.AuthService.login(
        this.formGroup.value.user ?? '',
        this.formGroup.value.password ?? ''
      )
    ) {
      this.router.navigate(['home']);
    } else {
      this.error = ['Usuário ou senha inválidos'];
    }
  }
}
