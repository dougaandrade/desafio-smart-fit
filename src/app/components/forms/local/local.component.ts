import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Academias } from '../../../Interfaces/Ilocation.interface';
import { GetUnitsService } from '../../../services/get-units.service';
import { MethodsFilter } from '../../../services/methods-filter.service';
import { UF } from '../../../enum/locaisUf.enum';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'local',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './local.component.html',
  styleUrl: '../forms.component.scss',
})
export class LocalComponent {
  @Output() local = new EventEmitter<Academias[]>();
  private methods$ = inject(MethodsFilter);
  private unitService$ = inject(GetUnitsService);
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
