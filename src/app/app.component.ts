import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/pages/header/header.component';
import { FooterComponent } from './components/pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @defer {
    <header-component />
    <router-outlet />
    <footer-component />
    }
  `,
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
})
export class AppComponent {}
