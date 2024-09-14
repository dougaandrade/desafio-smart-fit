import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../../../../services/get-units.service';
import { MethodsFilter } from '../../../../../services/methods-filter.service';
import { Academias } from '../../../../../Interfaces/Ilocation.interface';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'fechadas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './und-fechadas.component.html',
  styleUrl: '/src/app/scss/forms.component.scss',
})
export class UndFechadasComponent {
  undFechada = output<Academias[]>();
  private methods$ = inject(MethodsFilter);
  private unitService$ = inject(GetUnitsService);
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

    this.updateResultadosCount(filteredAcademias);
    this.undFechada.emit(filteredAcademias);
  }
}
