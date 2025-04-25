import { GetUnitsService } from './get-units.service';
import { Academias } from '../Interfaces/Ilocation.interface';
import { inject, Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotifyService } from './notify.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MethodsFilter {
  // na service deve ser criado um subject, pois o output não pode ser usado dentro de uma service

  private readonly filtersmethods = new Subject<Academias[]>();
  filtersmethods$ = this.filtersmethods.asObservable();
  private readonly notify = inject(NotifyService);

  resultadosCount = 0;
  private readonly formBuilder$ = inject(FormBuilder);
  private readonly unitService$ = inject(GetUnitsService);

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
      this.filtersmethods.next(academias);
    } catch (error) {
      this.notify.notifyAcademiasError(`${error}`);
    }
  }
}
