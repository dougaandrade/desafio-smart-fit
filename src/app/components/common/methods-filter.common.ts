import { FormBuilder } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Academias } from '../../Interfaces/Ilocation.interface';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethodsFilter {
  @Output() filtersmethods = new EventEmitter<Academias[]>();

  formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false,
    uf: '',
  });

  resultadosCount = 0;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {
    this.loadAllAcademias();
  }

  updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }

  async loadAllAcademias() {
    const academias = await this.unitService.obterAcademias();
    this.updateResultadosCount(academias);
    this.filtersmethods.emit(academias);
  }
}
