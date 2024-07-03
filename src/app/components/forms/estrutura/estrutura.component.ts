import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../../services/get-units.service';
import { methodsFilter } from '../../common/methods-filter.common';
import { Academias } from '../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'estrutura',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './estrutura.component.html',
  styleUrl: '../forms.component.scss',
})
export class EstruturaComponent {
  @Output() estrutura = new EventEmitter<Academias[]>();
  formGroup = this.methods.formGroup;
  updateResultadosCount = this.methods.updateResultadosCount;

  constructor(
    private methods: methodsFilter,
    private unitService: GetUnitsService
  ) {}

  async onFilterMask() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.mask === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterTowel() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.towel === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterFountain() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.fountain === 'partial'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterLocker() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.locker_room === 'allowed'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }
}
