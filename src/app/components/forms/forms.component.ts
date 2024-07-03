import { methodsFilter } from '../common/methods-filter.common';
import { Academias } from './../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UF } from '../enum/locaisUf.enum';
import { ModalComponent } from './modal/modal.component';
import { UndFechadasComponent } from './und-fechadas/und-fechadas.component';
import { HorariosComponent } from './horarios/horarios.component';
import { EstruturaComponent } from './estrutura/estrutura.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalComponent,
    UndFechadasComponent,
    HorariosComponent,
    EstruturaComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  academias = output<Academias[]>();

  formGroup = this.methods.formGroup;

  isModalVisible = false;
  resultadosCount = 0;
  localUF = Object.values(UF);

  constructor(private methods: methodsFilter) {
    this.methods.filtersmethods.subscribe((academias) => {
      this.academias.emit(academias);
      this.updateResultadosCount(academias);
    });
    this.methods.loadAllAcademias();
  }

  loadAllAcademias() {
    this.methods.loadAllAcademias();
  }

  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed() {
    this.isModalVisible = false;
  }

  onSearchLocal() {
    this.methods.onSearchLocal();
  }

  onFilterMask() {
    this.methods.onFilterMask();
  }

  onFilterTowel() {
    this.methods.onFilterTowel();
  }

  onFilterFountain() {
    this.methods.onFilterFountain();
  }

  onFilterLocker() {
    this.methods.onFilterLocker();
  }

  onGetFilters(academias: Academias[]) {
    this.academias.emit(academias);
    this.resultadosCount = academias.length;
  }

  updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }
}
