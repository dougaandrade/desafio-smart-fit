import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header-component />
    <router-outlet />
    <footer-component />
  `,
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {
  protected readonly auth = inject(AuthService);
}
