import { Component, inject, output } from '@angular/core';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';

import { GetUnitsService } from '../../../../../services/get-units.service';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { FormsModule } from '@angular/forms';
import { debounceTime, Observable, take } from 'rxjs';

@Component({
  selector: 'search-list',
  imports: [FormsModule],
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss', '../forms.component.scss'],
})
export class SearchListComponent {
  protected searchcomponent = output<Academias[]>();

  private readonly methods$ = inject(MethodsFilter);
  private readonly unitService$ = inject(GetUnitsService);
  private readonly updateResultadosCount = this.methods$.updateResultadosCount;
  searchTerm: string = '';

  // Função para filtrar a lista de academias
  async onSearch() {
    if (this.searchTerm.trim() === '' || this.searchTerm.trim().length === 0) {
      this.methods$.loadAllAcademias();
      return;
    }

    const academias = await this.unitService$.obterAcademias();

    let searchTitle$: Observable<Academias[]>;
    searchTitle$ = new Observable((observer) => {
      // Extrair a primeira letra do termo de pesquisa
      const firstLetter = this.searchTerm.trim().split(/\s+/)[0].toLowerCase();

      const filteredAcademias = academias.filter(
        (value) => value.title.toLowerCase().startsWith(firstLetter)
        // Verifica se começa com a primeira letra
      );

      if (filteredAcademias.length === 0) {
        this.methods$.loadAllAcademias();
        return;
      }

      observer.next(filteredAcademias);
    });

    searchTitle$
      .pipe(debounceTime(250), take(1))
      .subscribe((filteredAcademias) => {
        return this.searchcomponent.emit(filteredAcademias);
      });
  }
}
