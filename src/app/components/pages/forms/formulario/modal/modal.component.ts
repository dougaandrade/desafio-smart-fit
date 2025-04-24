import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstruturaComponent } from '../estrutura/estrutura.component';
import { UndFechadasComponent } from '../und-fechadas/und-fechadas.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { LocalComponent } from '../local/local.component';
import { Component, inject, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';
import { SearchListComponent } from '../search-list/search-list.component';

@Component({
    selector: 'modal',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        EstruturaComponent,
        UndFechadasComponent,
        HorariosComponent,
        LocalComponent,
        SearchListComponent,
        FormsModule,
    ],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent {
  readonly isvisible = input(false);
  // valor vazio pois estou usando para retirar o valor do input
  protected modal = output<Academias[]>();
  private readonly methods$ = inject(MethodsFilter);

  closed = output();
  formGroup = this.methods$.formGroup;

  notify() {
    Swal.fire({
      position: 'center',
      title: 'Filtro aplicado com sucesso',
      heightAuto: true,
      timerProgressBar: false,
      padding: '0.3rem',
      width: '300px',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  onGetFilters(academias: Academias[]) {
    this.modal.emit(academias);
    this.notify();
    this.closed.emit();
    return this.notify();
  }

  onSearch(academias: Academias[]) {
    this.modal.emit(academias);
  }

  close() {
    this.closed.emit();
  }
}
