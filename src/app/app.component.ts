import { Ilocation } from './Interfaces/Ilocation.interface';
import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { FooterComponent } from './components/footer/footer.component';
import { LegendComponent } from './components/legend/legend.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { GetUnitsService } from './services/get-units.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FormsComponent,
    FooterComponent,
    LegendComponent,
    CardsListComponent,
    CommonModule,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly unitService = inject(GetUnitsService);
  protected readonly unitsList = signal<Ilocation[]>([]);

  onSubmmit() {
    this.unitService.obterAcademias();
    console.log(this.onSubmmit);
  }
}
