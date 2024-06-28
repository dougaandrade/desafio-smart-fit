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

  constructor(private forms: FormsComponent) {}

  onSearchLocal() {
    this.forms.onSearchLocal();
  }
  onMorning() {
    this.forms.onMorning();
    this.closed.emit();
  }

  onAfternoon() {
    this.forms.onAfternoon();
    this.closed.emit();
  }

  onNight() {
    this.forms.onNight();
    this.closed.emit();
  }

  onFilterMask() {
    this.forms.onFilterMask();
    this.closed.emit();
  }

  onFilterTowel() {
    this.forms.onFilterTowel();
    this.closed.emit();
  }

  onFilterFountain() {
    this.forms.onFilterFountain();
    this.closed.emit();
  }

  onFilterLocker() {
    this.forms.onFilterLocker();
    this.closed.emit();
  }

  onShowClose() {
    this.forms.onShowClose();
    this.closed.emit();
  }

  close() {
    this.isVisible = false;
    this.closed.emit();
  }
}
