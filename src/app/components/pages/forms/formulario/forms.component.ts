import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  output,
} from '@angular/core';
import { MethodsFilter } from '../../../../services/methods-filter.service';
import { Academias } from '../../../../Interfaces/Ilocation.interface';

@Component({
  selector: 'forms',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
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
