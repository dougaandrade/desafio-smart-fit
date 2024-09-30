import { Component } from '@angular/core';
import { ContentMainComponent } from './content-main/content-main.component';

@Component({
  selector: 'homeComponent',
  standalone: true,
  imports: [ContentMainComponent],
  template: `
    <div class="container-content">
      <content-main />
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
