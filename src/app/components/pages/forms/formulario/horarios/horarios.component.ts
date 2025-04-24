import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { GetUnitsService } from '../../../../../services/get-units.service';

@Component({
  selector: 'horarios',
  imports: [ReactiveFormsModule],
  templateUrl: './horarios.component.html',
  styleUrl: '../forms.component.scss',
})
export class HorariosComponent {
  protected filterhorarios = output<Academias[]>();

  private readonly methods$ = inject(MethodsFilter);
  private readonly unitService$ = inject(GetUnitsService);

  formGroup = this.methods$.formGroup;
  updateResultadosCount = this.methods$.updateResultadosCount;

  async onMorning() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(
      typeof hour === 'string' ? hour : undefined
    );

    const startHour = 5;
    const endHour = 12;

    const filteredAcademias = academias.filter(({ schedules }) =>
      schedules?.some(({ hour }) => {
        const [start, end] = hour
          .replace(/\s/g, '')
          .split('às')
          .map((h) => parseInt(h.replace('h', ''), 10));

        return start >= startHour && end <= endHour;
      })
    );

    this.updateResultadosCount(filteredAcademias);
    this.filterhorarios.emit(filteredAcademias);
  }

  async onAfternoon() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(
      typeof hour === 'string' ? hour : undefined
    );

    const startHour = 12;
    const endHour = 18;

    const filteredAcademias = academias.filter(({ schedules }) =>
      schedules?.some(({ hour }) => {
        const [start, end] = hour
          .replace(/\s/g, '')
          .split('às')
          .map((h) => parseInt(h.replace('h', ''), 10));

        return start >= startHour && end <= endHour;
      })
    );

    this.updateResultadosCount(filteredAcademias);
    this.filterhorarios.emit(filteredAcademias);
  }

  async onNight() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(
      typeof hour === 'string' ? hour : undefined
    );

    const startHour = 18;

    const filteredAcademias = academias.filter(({ schedules }) =>
      schedules?.some(({ hour }) => {
        const [start] = hour
          .replace(/\s/g, '')
          .split('às')
          .map((h) => parseInt(h.replace('h', ''), 10));

        return start <= startHour;
      })
    );

    this.updateResultadosCount(filteredAcademias);
    this.filterhorarios.emit(filteredAcademias);
  }
}
