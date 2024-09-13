import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormIndexComponent } from './components/pages/formulario/form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <router-outlet /> `,
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    FormIndexComponent,
    HomeComponent,
    NotFoundPageComponent,
  ],
})
export class AppComponent {}
