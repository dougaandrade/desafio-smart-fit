import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { GetUnitsService } from '../../../../../services/get-units.service';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';
import { UF } from '../../../../../enum/locaisUf.enum';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'local',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './local.component.html',
  styleUrl: '/src/app/scss/forms.component.scss',
})
export class LocalComponent {
  local = output<Academias[]>();

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
      this.updateResultadosCount(filteredAcademias);
      this.local.emit(filteredAcademias);
    }
  }
}
