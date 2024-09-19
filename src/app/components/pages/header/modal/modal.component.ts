import { CommonModule } from '@angular/common';
import { Component, inject, Input, output } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isVisible = false;
  logoutServ = inject(AuthService);

  closed = output();

  close() {
    this.closed.emit();
  }
  logout() {
    this.logoutServ.logout();
  }
}
