import { Component } from '@angular/core';
import { ContentMainComponent } from './content-main/content-main.component';

@Component({
  selector: 'contentComponent',
  standalone: true,
  imports: [ContentMainComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {}
