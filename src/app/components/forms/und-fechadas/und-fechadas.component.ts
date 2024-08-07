import { Academias } from './../../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MethodsFilter } from '../../../services/methods-filter.service';
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
  private methods$ = inject(MethodsFilter);
  private unitService$ = inject(GetUnitsService);
  formGroup = this.methods$.formGroup;


  updateResultadosCount = this.methods$.updateResultadosCount;
  async onShowClose() {
    const { showClosed } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(
      '',
      '',
      showClosed ? true : undefined
    );

    const filteredAcademias = academias.filter((value) => !value.opened);

    this.updateResultadosCount(filteredAcademias);
    this.undFechada.emit(filteredAcademias);
  }
}
