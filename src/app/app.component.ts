import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormIndexComponent } from './components/pages/formulario/form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` @if (auth.isAuthenticated()) {
    <header-component />
    }
    <router-outlet />
    @if (auth.isAuthenticated()) {
    <footer-component />
    }`,
  styleUrl: './app.component.scss',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FormIndexComponent,
    HomeComponent,
    NotFoundPageComponent,
    LoginComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  protected readonly auth = inject(AuthService);
}
