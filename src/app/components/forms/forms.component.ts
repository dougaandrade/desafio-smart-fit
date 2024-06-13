import { Academias } from './../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  readonly academias = output<Academias[]>();
  formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false,
    uf: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}
  async onSubmmit() {
    const { hour, showClosed, uf } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      uf ? uf : '',
      '',
      showClosed ? true : undefined,
      typeof hour === 'string' ? hour : undefined
    );
    if (uf === '') {
      this.academias.emit(academias);
    } else {
      this.academias.emit(
        academias.filter((value) => {
          value.uf;
        })
      );
    }
  }

  onClear() {
    this.formGroup.reset();
  }
}
