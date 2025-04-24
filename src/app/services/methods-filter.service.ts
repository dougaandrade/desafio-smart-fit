import { GetUnitsService } from './get-units.service';
import { Academias } from '../Interfaces/Ilocation.interface';
import { inject, Injectable, output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root',
})
export class MethodsFilter {
  // esse decorator so funciona em services
  readonly filtersmethods = output<Academias[]>();
  private readonly notify = inject(NotifyService);

  resultadosCount = 0;
  formBuilder$ = inject(FormBuilder);
  unitService$ = inject(GetUnitsService);

  formGroup = this.formBuilder$.group({
    hour: [''],
    showClosed: [false],
    uf: [''],
  });

  updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }

  async loadAllAcademias() {
    try {
      const academias = await this.unitService$.obterAcademias();
      this.updateResultadosCount(academias);
      this.filtersmethods.emit(academias);
    } catch (error) {
      this.notify.notifyAcademiasError(`${error}`);
    }
  }
}
