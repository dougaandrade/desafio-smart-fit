import { ReactiveFormsModule } from '@angular/forms';
import { EstruturaComponent } from '../estrutura/estrutura.component';
import { UndFechadasComponent } from '../und-fechadas/und-fechadas.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { LocalComponent } from '../local/local.component';
import { Component, inject, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';
import { UF } from '../../../../../enum/locaisUf.enum';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EstruturaComponent,
    UndFechadasComponent,
    HorariosComponent,
    LocalComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isVisible = false;
  // valor vazio pois estou usando para retirar o valor do input
  closed = output();

  localUF = Object.values(UF);
  modal = output<Academias[]>();
  private methods$ = inject(MethodsFilter);
  formGroup = this.methods$.formGroup;

  onGetFilters(academias: Academias[]) {
    this.modal.emit(academias);
    Swal.fire({
      position: 'center',
      title: 'Filtro aplicado com sucesso',
      heightAuto: true,
      timerProgressBar: true,
      padding: '0.3rem',
      width: '300px',
      showConfirmButton: false,
      timer: 1500,
    });
    this.closed.emit();
    return Swal.fire;
  }
  close() {
    this.closed.emit();
  }
}
