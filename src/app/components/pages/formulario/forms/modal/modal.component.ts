import { ToastService } from './../../../../../services/toast.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EstruturaComponent } from '../estrutura/estrutura.component';
import { UndFechadasComponent } from '../und-fechadas/und-fechadas.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { LocalComponent } from '../local/local.component';
import { Component, inject, Input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  private readonly methods$ = inject(MethodsFilter);
  formGroup = this.methods$.formGroup;
  notify = inject(ToastService);

  onGetFilters(academias: Academias[]) {
    this.modal.emit(academias);
    this.notify.toastNotification('Filtros aplicados');
    this.closed.emit();
    return this.notify;
  }
  close() {
    this.closed.emit();
  }
}
