import { Academias } from './Interfaces/Ilocation.interface';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { GetUnitsService } from './services/get-units.service';
import { LoaderComponent } from './components/loader/loader.component';
import { Component, inject, signal } from '@angular/core';
import { FormsComponent } from './components/forms/forms.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @defer(on timer(1s)){
    <div class="app-container">
      <header-component />
      <div class="card-separator">
        <forms (academias)="unitsList.set($event)" />
        <cards-list [unitsList]="unitsList()" />
      </div>
      <footer-component />
    </div>

    }@placeholder {
    <div class="app-load">
      <loader />
    </div>
    }
  `,
  styleUrl: './app.component.scss',
  imports: [
    HeaderComponent,
    FooterComponent,
    CardsListComponent,
    LoaderComponent,
    FormsComponent,
  ],
})
export class AppComponent {
  private readonly unitService = inject(GetUnitsService);
  protected readonly unitsList = signal<Academias[]>([]);

  onSubmit() {
    this.unitService.obterAcademias();
  }
}
