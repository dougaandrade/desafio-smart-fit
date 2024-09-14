import { Component, inject, signal } from '@angular/core';
import { GetUnitsService } from '../../../services/get-units.service';
import { Academias } from '../../../Interfaces/Ilocation.interface';
import { FormsComponent } from './forms/forms.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { LoaderComponent } from './loader/loader.component';
import { CardsComponent } from './card/cards.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'formComponent',
  standalone: true,
  imports: [
    FormsComponent,
    CardsListComponent,
    LoaderComponent,
    CardsComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormIndexComponent {
  private readonly unitService = inject(GetUnitsService);
  protected readonly unitsList = signal<Academias[]>([]);
  onSubmit() {
    this.unitService.obterAcademias();
  }
}
