import { error } from 'console';
import { GetUnitsService } from './get-units.service';
import { Academias } from '../Interfaces/Ilocation.interface';
import { EventEmitter, inject, Injectable, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MethodsFilter {
  // esse decorator so funciona em services
  @Output() filtersmethods = new EventEmitter<Academias[]>();

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

  notify(error: string) {
    Swal.fire({
      position: 'center',
      title: `erro em obter academias: ${error}`,
      heightAuto: true,
      timerProgressBar: true,
      padding: '0.3rem',
      width: '300px',
      showConfirmButton: false,
      timer: 199500,
    });
  }

  async loadAllAcademias() {
    try {
      const academias = await this.unitService$.obterAcademias();
      this.updateResultadosCount(academias);
      this.filtersmethods.emit(academias);
    } catch (error) {
      this.notify(`${error}`);
    }
  }
}
