import {
  Component,
  EventEmitter,
  Input,
  output,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UF } from '../../../enum/locaisUf.enum';
import { MethodsFilter } from '../../../services/methods-filter.service';
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
  @Input() isVisible = false;
  @Output() closed = new EventEmitter<void>();

  localUF = Object.values(UF);
  modal = output<Academias[]>();
  private methods$ = inject(MethodsFilter);
  formGroup = this.methods$.formGroup;

  onGetFilters(academias: Academias[]) {
    this.modal.emit(academias);
    this.closed.emit();
    alert('Filtros aplicados');
  }

  onGetFiltersLocal(academias: Academias[]) {
    this.modal.emit(academias);
  }

  close() {
    this.closed.emit();
  }
}
