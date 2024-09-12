import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { UndFechadasComponent } from './und-fechadas/und-fechadas.component';
import { HorariosComponent } from './horarios/horarios.component';
import { EstruturaComponent } from './estrutura/estrutura.component';
import { LocalComponent } from './local/local.component';
import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MethodsFilter } from '../../../../services/methods-filter.service';
import { Academias } from '../../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ModalComponent,
    UndFechadasComponent,
    HorariosComponent,
    EstruturaComponent,
    LocalComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrl: '/src/app/scss/forms.component.scss',
})
export class FormsComponent implements OnInit {
  academias = output<Academias[]>();
  private methods = inject(MethodsFilter);

  formGroup = this.methods.formGroup;

  isModalVisible = false;
  resultadosCount = 0;

  ngOnInit() {
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
