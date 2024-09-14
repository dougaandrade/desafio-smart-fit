import { Component, input } from '@angular/core';
import { Academias } from '../../../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../card/cards.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cards-list',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  readonly unitsList = input<Academias[]>();
}
