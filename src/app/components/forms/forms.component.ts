import { methodsFilter } from '../common/methods-filter.common';
import { Academias } from './../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UF } from '../enum/locaisUf.enum';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {

  academias = output<Academias[]>();

  formGroup = this.methodsFilter.formGroup;
  isModalVisible = false;
  resultadosCount = 0;
  localUF = Object.values(UF);

  constructor(private methodsFilter: methodsFilter) {
    this.methodsFilter.academias.subscribe((academias) => {
      this.academias.emit(academias);
      this.updateResultadosCount(academias);
    });
    this.methodsFilter.loadAllAcademias();
  }

  updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }

  loadAllAcademias() {
    this.methodsFilter.loadAllAcademias();
  }

  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed() {
    this.isModalVisible = false;
  }

  onSearchLocal() {
    this.methodsFilter.onSearchLocal();
  }

  onMorning() {
    this.methodsFilter.onMorning();
  }

  onAfternoon() {
    this.methodsFilter.onAfternoon();
  }

  onNight() {
    this.methodsFilter.onNight();
  }

  onFilterMask() {
    this.methodsFilter.onFilterMask();
  }

  onFilterTowel() {
    this.methodsFilter.onFilterTowel();
  }

  onFilterFountain() {
    this.methodsFilter.onFilterFountain();
  }

  onFilterLocker() {
    this.methodsFilter.onFilterLocker();
  }

  onShowClose() {
    this.methodsFilter.onShowClose();
  }
}
