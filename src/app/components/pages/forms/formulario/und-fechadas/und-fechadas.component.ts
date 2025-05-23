import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../../../../services/get-units.service';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'fechadas',
  imports: [ReactiveFormsModule],
  templateUrl: './und-fechadas.component.html',
  styleUrl: '../forms.component.scss',
})
export class UndFechadasComponent {
  protected undfechada = output<Academias[]>();
  private readonly methods$ = inject(MethodsFilter);
  private readonly unitService$ = inject(GetUnitsService);
  formGroup = this.methods$.formGroup;

  updateResultadosCount = this.methods$.updateResultadosCount;
  async onShowClose() {
    const { showClosed } = this.formGroup.value;

    const academias = await this.unitService$.obterAcademias(
      '',
      '',
      showClosed ? true : undefined
    );

    const filteredAcademias = academias.filter((value) => !value.opened);

    return this.undfechada.emit(filteredAcademias);
  }
}
