import { FormBuilder} from '@angular/forms';
import { GetUnitsService } from './get-units.service';
import { Academias } from '../Interfaces/Ilocation.interface';
import { EventEmitter, inject, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MethodsFilter {
  @Output() filtersmethods = new EventEmitter<Academias[]>();

  resultadosCount = 0;

  formBuilder$ = inject(FormBuilder);
  unitService$ = inject(GetUnitsService);

  formGroup = this.formBuilder$.group({
    hour: '',
    showClosed: false,
    uf: '',
  });


  updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }

  async loadAllAcademias() {
    const academias = await this.unitService$.obterAcademias();
    this.updateResultadosCount(academias);
    this.filtersmethods.emit(academias);
  }
}
