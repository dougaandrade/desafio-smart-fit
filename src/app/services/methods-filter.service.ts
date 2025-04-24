import { GetUnitsService } from './get-units.service';
import { Academias } from '../Interfaces/Ilocation.interface';
import { inject, Injectable, Output, output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotifyService } from './notify.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MethodsFilter {
  // esse decorator so funciona em services
  private filtersmethods = new Subject<Academias[]>();
  filtersmethods$ = this.filtersmethods.asObservable();

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
      this.filtersmethods.next(academias);
    } catch (error) {
      this.notify.notifyAcademiasError(`${error}`);
    }
  }
}
