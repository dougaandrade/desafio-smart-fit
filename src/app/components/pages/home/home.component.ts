import { Component } from '@angular/core';
import { HeaderComponentHome } from './header/header.component';
import { FooterComponentHome } from './footer/footer.component';

@Component({
  selector: 'homeComponent',
  standalone: true,
  imports: [HeaderComponentHome, FooterComponentHome],
  template: `
    <headerHome />
    <footerHome />
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
