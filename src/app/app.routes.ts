import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FormIndexComponent } from './components/pages/formulario/form.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'forms',
    title: 'Formulário',
    component: FormIndexComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: '**',
    title: `error`,
    component: NotFoundPageComponent,
  },
];
