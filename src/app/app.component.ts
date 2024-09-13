import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FormIndexComponent } from './components/pages/formulario/form.component';
import { HomeComponent } from './components/pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet />
    <homeComponent />
    <formComponent />
  `,
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FormIndexComponent, HomeComponent],
})
export class AppComponent {}
