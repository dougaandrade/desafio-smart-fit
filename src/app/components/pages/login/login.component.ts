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
  error = '';

  protected formLogin = new FormGroup({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });

  protected onLogin() {
    this.loginAuth.login(this.formLogin.value as Iuser).subscribe(() => {
      if (!this.formLogin.valid) {
        this.checkedForm();
        return;
      }

      const formSucess = this.loginAuth.login(this.formLogin.value as Iuser);

      if (!formSucess) {
        this.checkedForm();
        this.error = 'Usuário ou senha inválidos';
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  }

  protected checkedForm() {
    const { username, password } = this.formLogin.value;

    if (!username) {
      this.error = 'Preencha o campo usuário';
    } else if (!password) {
      this.error = 'Preencha o campo senha';
    }
  }
}
