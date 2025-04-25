import { Component, inject, output } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { GetUnitsService } from '../../../../../services/get-units.service';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';
import { UF } from '../../../../../enum/locaisUf.enum';

@Component({
  selector: 'local',
  imports: [ReactiveFormsModule],
  templateUrl: './local.component.html',
  styleUrl: '../forms.component.scss',
})
export class LocalComponent {
  protected local = output<Academias[]>();

  private readonly methods$ = inject(MethodsFilter);
  private readonly unitService$ = inject(GetUnitsService);

  formGroup = this.methods$.formGroup;
  updateResultadosCount = this.methods$.updateResultadosCount;
  localUF = Object.values(UF);

  async onSearchLocal() {
    const { uf } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(uf ? '' : '');

    if (!uf) {
      this.updateResultadosCount(academias);
      this.local.emit(academias);
    } else {
      const filteredAcademias = academias.filter((value) => value.uf === uf);
      return this.local.emit(filteredAcademias);
    }
  }
}
