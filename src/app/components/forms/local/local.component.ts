import { Component, EventEmitter, Output } from '@angular/core';
import { Academias } from '../../../Interfaces/Ilocation.interface';
import { GetUnitsService } from '../../../services/get-units.service';
import { methodsFilter } from '../../common/methods-filter.common';
import { UF } from '../../enum/locaisUf.enum';
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
  formGroup = this.methods.formGroup;
  updateResultadosCount = this.methods.updateResultadosCount;
  localUF = Object.values(UF);

  constructor(
    private methods: methodsFilter,
    private unitService: GetUnitsService
  ) {}

  async onSearchLocal() {
    const { hour, showClosed, uf } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      uf ? '' : '',
      '',
      showClosed ? true : undefined,
      typeof hour === 'string' ? hour : undefined
    );

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
