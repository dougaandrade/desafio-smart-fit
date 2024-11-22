import { Component } from '@angular/core';
import { ContentMainComponent } from './content-main/content-main.component';
import { CardImgComponent } from './card-img/card-img.component';

@Component({
  selector: 'homeComponent',
  standalone: true,
  imports: [ContentMainComponent, CardImgComponent],
  template: `
    <div class="container-content">
      <!-- <content-main /> -->
      <cardImg />
    </div>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
