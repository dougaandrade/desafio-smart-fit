import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Academias } from '../../../../Interfaces/Ilocation.interface';

@Component({
    selector: 'app-cards',
    imports: [CommonModule],
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss'
})
export class CardsComponent {
  readonly card = input.required<Academias>();
}
