import { MethodsFilter } from '../common/methods-filter.common';
import { Academias } from './../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { UndFechadasComponent } from './und-fechadas/und-fechadas.component';
import { HorariosComponent } from './horarios/horarios.component';
import { EstruturaComponent } from './estrutura/estrutura.component';
import { LocalComponent } from './local/local.component';

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
    LocalComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  academias = output<Academias[]>();

  formGroup = this.methods.formGroup;

  isModalVisible = false;
  resultadosCount = 0;

  constructor(private methods: MethodsFilter) {
    this.methods.filtersmethods.subscribe((academias) => {
      this.academias.emit(academias);
      this.updateResultadosCount(academias);
    });
    this.methods.loadAllAcademias();
  }

  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed() {
    this.isModalVisible = false;
  }

  onGetFilters(academias: Academias[]) {
    this.academias.emit(academias);
    this.resultadosCount = academias.length;
  }

  updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }
}
