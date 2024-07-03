import { FormsComponent } from './../forms.component';
import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UF } from '../../enum/locaisUf.enum';
import { methodsFilter } from '../../common/methods-filter.common';
import { EstruturaComponent } from '../estrutura/estrutura.component';
import { UndFechadasComponent } from '../und-fechadas/und-fechadas.component';
import { HorariosComponent } from '../horarios/horarios.component';
import { Academias } from '../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EstruturaComponent,
    UndFechadasComponent,
    HorariosComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  academias = output<Academias[]>();
  formGroup = this.methods.formGroup;
  @Input() isVisible = false;
  localUF = Object.values(UF);
  @Output() closed = new EventEmitter<void>();

  constructor(private methods: methodsFilter) {}

  onSearchLocal() {
    this.methods.onSearchLocal();
  }

  onFilterMask() {
    this.methods.onFilterMask();
    this.closed.emit();
  }

  onFilterTowel() {
    this.methods.onFilterTowel();
    this.closed.emit();
  }

  onFilterFountain() {
    this.methods.onFilterFountain();
    this.closed.emit();
  }

  onFilterLocker() {
    this.methods.onFilterLocker();
    this.closed.emit();
  }

  onShowClose() {
    this.methods.onShowClose();
    this.closed.emit();
  }

  close() {
    this.isVisible = false;
    this.closed.emit();
  }
  onfiltroUndFechada(academias: Academias[]) {
    this.academias.emit(academias);
    this.closed.emit();
  }

  onfiltroHorario(academias: Academias[]) {
    this.academias.emit(academias);
    this.closed.emit();
  }
}
