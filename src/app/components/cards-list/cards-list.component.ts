import { Component, Input, OnInit } from '@angular/core';
import { GetUnitsService } from '../../services/get-units.service';
import { Ilocation } from '../../Interfaces/Ilocation.interface';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../card/cards.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule, CardsComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Ilocation[] = [];


  constructor() {}

  ngOnInit(): void {}
}
