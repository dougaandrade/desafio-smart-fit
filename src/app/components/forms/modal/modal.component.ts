import { FormsComponent } from './../forms.component';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UF } from '../../enum/locaisUf.enum';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input()
  formGroup!: FormGroup;
  @Input() isVisible = false;
  localUF = Object.values(UF);
  @Output() closed = new EventEmitter<void>();

  constructor(private form: FormsComponent) {}

  onSearchLocal() {
    this.form.onSearchLocal();
  }
  onMorning() {
    this.form.onMorning();
    this.closed.emit();
  }

  onAfternoon() {
    this.form.onAfternoon();
    this.closed.emit();
  }

  onNight() {
    this.form.onNight();
    this.closed.emit();
  }

  onFilterMask() {
    this.form.onFilterMask();
    this.closed.emit();
  }

  onFilterTowel() {
    this.form.onFilterTowel();
    this.closed.emit();
  }

  onFilterFountain() {
    this.form.onFilterFountain();
    this.closed.emit();
  }

  onFilterLocker() {
    this.form.onFilterLocker();
    this.closed.emit();
  }

  onShowClose() {
    this.form.onShowClose();
    this.closed.emit();
  }

  close() {
    this.isVisible = false;
    this.closed.emit();
  }
}
