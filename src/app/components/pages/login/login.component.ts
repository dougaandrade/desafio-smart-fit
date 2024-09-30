import { Iuser } from './../../../Interfaces/Iuser.interface';
import { AuthService } from './../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  login = inject(FormBuilder);
  router = inject(Router);
  error = '';
  private readonly loginAuth = inject(AuthService);

  formGroup = inject(FormBuilder).group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onLogin() {
    if (
      this.formGroup.valid &&
      this.loginAuth.login(this.formGroup.value as Iuser)
    ) {
      this.router.navigate(['home']);
    } else {
      this.error = 'Usuário ou senha inválidos';
    }
  }
}
