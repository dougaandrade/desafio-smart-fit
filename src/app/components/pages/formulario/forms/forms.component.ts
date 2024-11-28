import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { UndFechadasComponent } from './und-fechadas/und-fechadas.component';
import { HorariosComponent } from './horarios/horarios.component';
import { EstruturaComponent } from './estrutura/estrutura.component';
import { LocalComponent } from './local/local.component';
import { Component, inject, OnInit, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MethodsFilter } from '../../../../services/methods-filter.service';
import { Academias } from '../../../../Interfaces/Ilocation.interface';
import { SearchListComponent } from './search-list/search-list.component';

@Component({
  selector: 'forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ModalComponent,
    UndFechadasComponent,
    HorariosComponent,
    EstruturaComponent,
    LocalComponent,
    SearchListComponent,
  ],
  templateUrl: './forms.component.html',
  styleUrl: '/src/app/scss/forms.component.scss',
})
export class FormsComponent implements OnInit {
  protected academias = output<Academias[]>();
  private readonly methods = inject(MethodsFilter);

  formgroup = this.methods.formGroup;
  isModalVisible: boolean = false;
  resultadosCount = 0;

  ngOnInit() {
    this.methods.filtersmethods.subscribe((academias) => {
      this.academias.emit(academias);
      this.updateResultadosCount(academias);
    });
    this.methods.loadAllAcademias();
  }

  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed() {
    this.isModalVisible = false;
  }

  protected onGetFilters(academias: Academias[]) {
    this.academias.emit(academias);
    this.resultadosCount = academias.length;
  }

  protected updateResultadosCount(academias: Academias[]) {
    this.resultadosCount = academias.length;
  }
}
