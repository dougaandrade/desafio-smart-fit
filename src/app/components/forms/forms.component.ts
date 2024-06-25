import { methodsFilter } from './../core/methods-filter.core';
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
    this.methodsFilter.loadAllAcademias();
  }

  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed() {
    this.isModalVisible = false;
  }

  updateResultadosCount(academias: Academias[]) {
    this.methodsFilter.resultadosCount = academias.length;
  }

  async loadAllAcademias() {
    this.methodsFilter.loadAllAcademias();
  }

  async onSearchLocal() {
    this.methodsFilter.onSearchLocal();
  }

  async onMorning() {
    this.methodsFilter.onMorning();
  }

  async onAfternoon() {
    this.methodsFilter.onAfternoon();
  }

  async onNight() {
    this.methodsFilter.onNight();
  }

  async onFilterMask() {
    this.methodsFilter.onFilterMask();
  }

  async onFilterTowel() {
    this.methodsFilter.onFilterTowel();
  }

  async onFilterFountain() {
    this.methodsFilter.onFilterFountain();
  }

  async onFilterLocker() {
    this.methodsFilter.onFilterLocker();
  }

  async onShowClose() {
    this.methodsFilter.onShowClose();
  }
}
