import { AuthService } from './../../../services/auth.service';

import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Iuser } from '../../../Interfaces/Iusers.interface';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
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

  protected onAddUser() {
    this.loginAuth.addNewUser(this.formLogin.value as Iuser);
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
