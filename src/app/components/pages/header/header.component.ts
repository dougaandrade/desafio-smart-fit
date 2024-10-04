import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [ModalComponent, ButtonIconComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isModalVisible = false;
  openModal() {
    this.isModalVisible = true;
  }

  onModalClosed() {
    this.isModalVisible = false;
  }
}
