import { Component, input } from '@angular/core';
import { Academias } from '../../../../Interfaces/Ilocation.interface';

import { CardsComponent } from '../card/cards.component';

@Component({
    selector: 'cards-list',
    imports: [CardsComponent],
    templateUrl: './cards-list.component.html',
    styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {
  readonly unitsList = input<Academias[]>();
}
