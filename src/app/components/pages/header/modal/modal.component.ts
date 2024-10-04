import { CommonModule } from '@angular/common';
import { Component, inject, Input, output } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() isVisible = false;
  private readonly logoutServ = inject(AuthService);
  closed = output();
  username = this.logoutServ.getuser();
  close() {
    this.closed.emit();
  }

  logout() {
    this.logoutServ.logout();
  }
}
