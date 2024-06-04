import { Component, input, OnInit } from '@angular/core';
import { Ilocation } from '../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../card/cards.component';
import { InputSearchComponent } from '../input-search/input-search.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent {
  readonly unitsList = input.required<Ilocation[]>();

  constructor() {}
}
