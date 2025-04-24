import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../../../../services/get-units.service';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';
import { MethodsFilter } from '../../../../../services/methods-filter.service';

@Component({
  selector: 'estrutura',
  imports: [ReactiveFormsModule],
  templateUrl: './estrutura.component.html',
  styleUrl: '../forms.component.scss',
})
// regex para validar o conteudo
// /Obs./.exec(value.content)
export class EstruturaComponent {
  protected estrutura = output<Academias[]>();

  private readonly methods$ = inject(MethodsFilter);
  private readonly unitService$ = inject(GetUnitsService);

  formGroup = this.methods$.formGroup;
  academias = this.unitService$.obterAcademias();
  updateResultadosCount = this.methods$.updateResultadosCount;

  async onFilterMask() {
    const filteredAcademias = (await this.academias).filter(
      (value) => value.mask === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterTowel() {
    const filteredAcademias = (await this.academias).filter(
      (value) => value.towel === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterFountain() {
    const filteredAcademias = (await this.academias).filter(
      (value) => value.fountain === 'partial'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }

  async onFilterLocker() {
    const filteredAcademias = (await this.academias).filter(
      (value) => value.locker_room === 'allowed'
    );

    this.updateResultadosCount(filteredAcademias);
    this.estrutura.emit(filteredAcademias);
  }
}
