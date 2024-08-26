import { CommonModule } from '@angular/common';
import { Component, inject, output} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../../services/get-units.service';
import { MethodsFilter } from '../../../services/methods-filter.service';
import { Academias } from '../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'horarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './horarios.component.html',
  styleUrl: '../forms.component.scss',
})
export class HorariosComponent {

  filterhorarios = output<Academias[]>();

  private methods$ = inject(MethodsFilter);
  private unitService$ = inject(GetUnitsService);

  formGroup = this.methods$.formGroup;
  updateResultadosCount = this.methods$.updateResultadosCount;

  async onMorning() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias( typeof hour === 'string' ? hour : undefined);

    const filteredAcademias = academias.filter(({ schedules }) =>
      schedules?.some(({ hour }) => hour === '06h às 12h')
    );

    this.updateResultadosCount(filteredAcademias);
    this.filterhorarios.emit(filteredAcademias);
  }

  async onAfternoon() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(typeof hour === 'string' ? hour : undefined);

    const filteredAcademias = academias.filter(({ schedules }) =>
      schedules?.some(({ hour }) => hour === '12h às 18h')
    );

    this.updateResultadosCount(filteredAcademias);
    this.filterhorarios.emit(filteredAcademias);
  }

  async onNight() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(typeof hour === 'string' ? hour : undefined);

    const filteredAcademias = academias.filter(({ schedules }) =>
      schedules?.some(({ hour }) => hour === '18h às 21h')
    );

    this.updateResultadosCount(filteredAcademias);
    this.filterhorarios.emit(filteredAcademias);
  }
}
