import { Ilocation } from './../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  output,
  Output,
  OutputEmitterRef,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { first, last } from 'rxjs';
import { Ihour_index } from '../../Interfaces/Ihour_index.interface';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  readonly academias = output<Ilocation[]>();
  formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false,
  });

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}

  async onSubmmit() {
    const academias = await this.unitService.obterAcademias();
    this.academias.emit(academias);
    console.log(academias);
  }

  onClear() {
    this.formGroup.reset();
  }
}
