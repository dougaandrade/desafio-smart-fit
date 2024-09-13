import { Component, inject, signal } from '@angular/core';
import { GetUnitsService } from '../../../services/get-units.service';
import { Academias } from '../../../Interfaces/Ilocation.interface';
import { environment } from 'baseUrl';
import { LoaderComponent } from './loader/loader.component';
import { FormsComponent } from './forms/forms.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'formComponent',
  standalone: true,
  imports: [
    LoaderComponent,
    FooterComponent,
    FormsComponent,
    CardsListComponent,
    HeaderComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormIndexComponent {
  currentEnvironment = environment.currentEnvironment;
  private readonly unitService = inject(GetUnitsService);
  protected readonly unitsList = signal<Academias[]>([]);

  onSubmit() {
    this.unitService.obterAcademias();
  }
}
