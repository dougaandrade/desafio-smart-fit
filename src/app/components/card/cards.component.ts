import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Academias } from '../../Interfaces/Ilocation.interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() card!: Academias;
  alertMethod() {
    alert(
      `Você selecionou á academia: ${this.card.title},`);
  }
}
