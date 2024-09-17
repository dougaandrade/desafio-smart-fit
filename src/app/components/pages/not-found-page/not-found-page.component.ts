import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'not-found-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {}
