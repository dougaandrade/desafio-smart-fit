import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/pages/formulario/header/header.component';
import { FooterComponent } from './components/pages/formulario/footer/footer.component';
import { CardsListComponent } from './components/pages/formulario/cards-list/cards-list.component';
import { LoaderComponent } from './components/pages/formulario/loader/loader.component';
import { FormsComponent } from './components/pages/formulario/forms/forms.component';
import { environment } from 'baseUrl';
import { GetUnitsService } from './services/get-units.service';
import { Academias } from './Interfaces/Ilocation.interface';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <router-outlet />
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
    <span class="envinronment">{{ currentEnvironment }}</span>
    <div class="app-load">
      <loader />
    </div>
    }
  `,
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CardsListComponent,
    LoaderComponent,
    FormsComponent,
  ],
})
export class AppComponent {
  currentEnvironment = environment.currentEnvironment;
  private readonly unitService = inject(GetUnitsService);
  protected readonly unitsList = signal<Academias[]>([]);

  onSubmit() {
    this.unitService.obterAcademias();
  }
}
