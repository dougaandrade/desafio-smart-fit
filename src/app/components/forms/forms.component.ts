import { Academias } from './../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { Component, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { UF } from '../enum/locaisUf.enum';

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
  localUF = Object.values(UF);

  constructor(
    private formBuilder: FormBuilder,
    private unitService: GetUnitsService
  ) {}
  async onSubmmit() {
    const { hour, showClosed, uf } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      uf ? '' : '',
      '',
      showClosed ? true : undefined,
      typeof hour === 'string' ? hour : undefined
    );

    if (!uf) {
      return this.academias.emit(academias);
    } else {
      this.academias.emit(
        academias.filter((value) => {
          return value.uf === uf;
        })
      );
    }
  }

  async onMorging() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      typeof hour === 'string' ? hour : undefined
    );
    this.academias.emit(
      academias.filter((academia) => {
        return (
          academia.schedules &&
          academia.schedules.some((schedule) => schedule.hour !== '06h às 12h')
        );
      })
    );
  }
  async onAfternoon() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      typeof hour === 'string' ? hour : undefined
    );
    this.academias.emit(
      academias.filter((academia) => {
        return (
          academia.schedules &&
          academia.schedules.some((schedule) => schedule.hour !== '12h às 18h')
        );
      })
    );
  }
  async onNight() {
    const { hour } = this.formGroup.value;

    const academias = await this.unitService.obterAcademias(
      '',
      typeof hour === 'string' ? hour : undefined
    );
    this.academias.emit(
      academias.filter((academia) => {
        return (
          academia.schedules &&
          academia.schedules.some((schedule) => schedule.hour == '18h')
        );
      })
    );
  }

  async onMask() {
    const academias = await this.unitService.obterAcademias();
    this.academias.emit(
      academias.filter((value) => value.mask === 'recommended')
    );
  }

  onClear() {
    this.formGroup.reset();
  }
}
/// posso criar metodos para caso tenha mascara e afins mas tem que arrumar esse dos horarios
// posso criar uma pasta com todos os metodos de filtro e no forms passar so um public com os metodos usados para assim diminuir os codigos e ajudar na manutenção do código incluido
