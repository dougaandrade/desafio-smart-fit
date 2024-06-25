import { FormBuilder } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Academias } from '../../Interfaces/Ilocation.interface';
import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import { UF } from '../enum/locaisUf.enum';

@Injectable({
  providedIn: 'root',
})
export class methodsFilter {

  @Output() academias = new EventEmitter<Academias[]>();

  formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false,
    uf: '',
  });

  localUF = Object.values(UF);
  resultadosCount = 0;

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {
    this.loadAllAcademias();
  }

  updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }
  async loadAllAcademias() {
    const academias = await this.unitService.obterAcademias();
    this.updateResultadosCount(academias);
    this.academias.emit(academias);
  }

  async onSearchLocal() {
    const { hour, showClosed, uf } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      uf ? '' : '',
      '',
      showClosed ? true : undefined,
      typeof hour === 'string' ? hour : undefined
    );

    if (!uf) {
      this.updateResultadosCount(academias);
      this.academias.emit(academias);
    } else {
      const filteredAcademias = academias.filter((value) => value.uf === uf);
      this.updateResultadosCount(filteredAcademias);
      this.academias.emit(filteredAcademias);
    }
  }

  async onMorning() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      typeof hour === 'string' ? hour : undefined
    );

    const filteredAcademias = academias.filter(
      (academia) =>
        academia.schedules &&
        academia.schedules.some((schedule) => schedule.hour === '06h às 12h')
    );

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }

  async onAfternoon() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      typeof hour === 'string' ? hour : undefined
    );

    const filteredAcademias = academias.filter(
      (academia) =>
        academia.schedules &&
        academia.schedules.some((schedule) => schedule.hour === '12h às 18h')
    );

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }

  async onNight() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      typeof hour === 'string' ? hour : undefined
    );

    const filteredAcademias = academias.filter(
      (academia) =>
        academia.schedules &&
        academia.schedules.some((schedule) => schedule.hour === '18h às 21h')
    );

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }

  async onFilterMask() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.mask === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }

  async onFilterTowel() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.towel === 'required'
    );

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }

  async onFilterFountain() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.fountain === 'partial'
    );

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }

  async onFilterLocker() {
    const academias = await this.unitService.obterAcademias();

    const filteredAcademias = academias.filter(
      (value) => value.locker_room === 'allowed'
    );

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }

  async onShowClose() {
    const { showClosed } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      '',
      showClosed ? true : undefined
    );

    const filteredAcademias = academias.filter((value) => !value.opened);

    this.updateResultadosCount(filteredAcademias);
    this.academias.emit(filteredAcademias);
  }
}
