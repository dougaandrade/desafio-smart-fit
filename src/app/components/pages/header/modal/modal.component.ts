import { CommonModule } from '@angular/common';
import { Component, inject, output, input, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
@Component({
    selector: 'app-modal',
    imports: [CommonModule, RouterLink, MatMenuModule],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  readonly isVisible = input(false);
  readonly authService$ = inject(AuthService);
  closed = output();

  close() {
    this.closed.emit();
  }
  ngOnInit(): void {
    this.authService$.getUser();
  }

  logout() {
    this.authService$.logout();
    this.closed.emit();
  }
}
