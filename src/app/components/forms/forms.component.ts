import { Academias } from './../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  readonly academias = output<Academias[]>();
  formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false,
    });

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}

  async onSubmmit() {
    const { hour, showClosed} = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      '',
      showClosed ? true : undefined,
      typeof hour === 'string' ? hour : undefined,
    );
    this.academias.emit(academias);
    console.log(academias.length);
    console.log(academias);
  }

  onClear() {
    this.formGroup.reset();
  }
}
