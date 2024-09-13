import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'homeComponent',
  standalone: true,
  imports: [ContentComponent],
  template: ` <contentComponent /> `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
