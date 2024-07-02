import { FormsComponent } from './../forms.component';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UF } from '../../enum/locaisUf.enum';
import { methodsFilter } from '../../common/methods-filter.common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  formGroup = this.methods.formGroup;
  @Input() isVisible = false;
  localUF = Object.values(UF);
  @Output() closed = new EventEmitter<void>();

  constructor(private methods: methodsFilter) {}

  onSearchLocal() {
    this.methods.onSearchLocal();
  }

  onMorning() {
    this.methods.onMorning();
    this.closed.emit();
  }

  onAfternoon() {
    this.methods.onAfternoon();
    this.closed.emit();
  }

  onNight() {
    this.methods.onNight();
    this.closed.emit();
  }

  onFilterMask() {
    this.methods.onFilterMask();
    this.closed.emit();
  }

  onFilterTowel() {
    this.methods.onFilterTowel();
    this.closed.emit();
  }

  onFilterFountain() {
    this.methods.onFilterFountain();
    this.closed.emit();
  }

  onFilterLocker() {
    this.methods.onFilterLocker();
    this.closed.emit();
  }

  onShowClose() {
    this.methods.onShowClose();
    this.closed.emit();
  }

  close() {
    this.isVisible = false;
    this.closed.emit();
  }
}
