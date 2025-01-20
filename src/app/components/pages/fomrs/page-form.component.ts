import { Component, inject, signal } from '@angular/core';
import { GetUnitsService } from '../../../services/get-units.service';
import { Academias } from '../../../Interfaces/Ilocation.interface';
import { FormsComponent } from './formulario/forms.component';
import { CardsListComponent } from './formulario/cards-list/cards-list.component';

@Component({
  selector: 'formComponent',
  standalone: true,
  imports: [FormsComponent, CardsListComponent],
  templateUrl: './page-form.component.html',
  styleUrl: './page-form.component.scss',
})
export class FormIndexComponent {
  private readonly unitService = inject(GetUnitsService);
  protected readonly unitsList = signal<Academias[]>([]);
  onSubmit() {
    this.unitService.obterAcademias();
  }
}
