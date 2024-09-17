import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FormIndexComponent } from './components/pages/formulario/form.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'forms',
    title: 'Formulário',
    component: FormIndexComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: `error`,
    component: NotFoundPageComponent,
  },
];
