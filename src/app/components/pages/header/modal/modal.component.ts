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
  // valor vazio pois estou usando para retirar o valor do input
  closed = output();

  close() {
    this.closed.emit();
  }
}
