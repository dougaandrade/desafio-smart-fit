import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../../services/get-units.service';
import { MethodsFilter } from '../../../services/methods-filter.service';
import { Academias } from '../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'estrutura',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './estrutura.component.html',
  styleUrl: '/src/app/scss/forms.component.scss',
})
// regex para validar o conteudo
// /Obs./.exec(value.content)
export class EstruturaComponent {
  estrutura = output<Academias[]>();

  private methods$ = inject(MethodsFilter);
  private unitService$ = inject(GetUnitsService);
  formGroup = this.methods$.formGroup;
  updateResultadosCount = this.methods$.updateResultadosCount;

  async onFilterMask() {
    const academias = await this.unitService$.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.mask === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterTowel() {
    const academias = await this.unitService$.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.towel === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterFountain() {
    const academias = await this.unitService$.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.fountain === 'partial'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterLocker() {
    const academias = await this.unitService$.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.locker_room === 'allowed'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }
}
