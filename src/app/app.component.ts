import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormIndexComponent } from './components/pages/formulario/form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header-component />
    <router-outlet />
    <footer-component />
  `,
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    FormIndexComponent,
    HomeComponent,
    NotFoundPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppComponent {}
