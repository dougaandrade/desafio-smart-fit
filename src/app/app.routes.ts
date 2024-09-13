import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FormIndexComponent } from './components/pages/formulario/form.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'form',
    title: 'Formulário',
    component: FormIndexComponent,
  },
  // {
  //   path: '',
  //   title: '404',
  //   // component: HomeComponent,
  // },
];
