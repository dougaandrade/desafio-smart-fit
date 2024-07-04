import { Academias } from './../../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MethodsFilter } from '../../common/methods-filter.common';
import { GetUnitsService } from '../../../services/get-units.service';

@Component({
  selector: 'fechadas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './und-fechadas.component.html',
  styleUrl: '../forms.component.scss',
})
export class UndFechadasComponent {
  @Output() undFechada = new EventEmitter<Academias[]>();
  formGroup = this.methods.formGroup;

  constructor(
    private methods: MethodsFilter,
    private unitService: GetUnitsService
  ) {}

  updateResultadosCount = this.methods.updateResultadosCount;
  async onShowClose() {
    const { showClosed } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      '',
      showClosed ? true : undefined
    );

    const filteredAcademias = academias.filter((value) => !value.opened);

    this.updateResultadosCount(filteredAcademias);
    this.undFechada.emit(filteredAcademias);
  }
}
