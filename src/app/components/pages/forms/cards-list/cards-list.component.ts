import { Component, input } from '@angular/core';
import { Academias } from '../../../../Interfaces/Ilocation.interface';
import { CardsComponent } from '../card/cards.component';

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
  imports: [CardsComponent],
})
export class CardsListComponent {
  readonly unitsList = input<Academias[]>();
}
