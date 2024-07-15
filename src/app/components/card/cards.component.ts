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
  alert() {
    console.log(`id: ${this.card.id}`);
    console.log(this.card.title);
  }
}
