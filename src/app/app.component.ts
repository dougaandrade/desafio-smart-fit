import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { FooterComponent } from './components/footer/footer.component';
import { LegendComponent } from './components/legend/legend.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FormsComponent,
    FooterComponent,
    LegendComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-smart-fit';
}
