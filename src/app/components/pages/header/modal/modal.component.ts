import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isVisible = false;

  closed = output();

  close() {
    this.closed.emit();
  }
}
