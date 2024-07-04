import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UF } from '../../enum/locaisUf.enum';
import { MethodsFilter } from '../../common/methods-filter.common';
import { EstruturaComponent } from '../estrutura/estrutura.component';
import { UndFechadasComponent } from '../und-fechadas/und-fechadas.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { Academias } from '../../../Interfaces/Ilocation.interface';
import { LocalComponent } from '../local/local.component';

@Component({
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
  modal = output<Academias[]>();
  formGroup = this.methods.formGroup;
  @Input() isVisible = false;
  localUF = Object.values(UF);
  @Output() closed = new EventEmitter<void>();

  constructor(private methods: MethodsFilter) {}

  onGetFilters(academias: Academias[]) {
    this.modal.emit(academias);
    this.closed.emit();
  }

  close() {
    this.isVisible = false;
    this.closed.emit();
  }
}
