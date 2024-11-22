import { Component, inject, output } from '@angular/core';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { GetUnitsService } from '../../../../../services/get-units.service';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { FormsModule } from '@angular/forms';
import { debounceTime, Observable } from 'rxjs';

@Component({
  selector: 'search-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-list.component.html',
  styleUrls: [
    './search-list.component.scss',
    '/src/app/scss/forms.component.scss',
  ],
})
export class SearchListComponent {
  searchcomponent = output<Academias[]>();

  private readonly methods$ = inject(MethodsFilter);
  private readonly unitService$ = inject(GetUnitsService);
  updateResultadosCount = this.methods$.updateResultadosCount;
  searchTerm: string = '';

  // Função para filtrar a lista de academias
  async onSearch() {
    if (this.searchTerm.trim() === '') {
      this.methods$.loadAllAcademias();
      return;
    }

    const academias = await this.unitService$.obterAcademias();

    let searchTitle$: Observable<Academias[]>;

    searchTitle$ = new Observable((observer) => {
      const filteredAcademias = academias.filter((value) =>
        value.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      observer.next(filteredAcademias);
    });

    searchTitle$.pipe(debounceTime(250)).subscribe((filteredAcademias) => {
      this.updateResultadosCount(filteredAcademias);
      this.searchcomponent.emit(filteredAcademias);
    });
  }
}
